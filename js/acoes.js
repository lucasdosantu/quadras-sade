let rotaMinimizada = false;
let pontosDaRota = [];
let localizacaoUsuario = null;
let modoNoturnoAtivo = false;
let camadaNoturna = null;
let camadaBairros = null;
let bairrosAtivos = false;

function monitorarLocalizacao() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(pos => {
			localizacaoUsuario = {
				lat: pos.coords.latitude, lng: pos.coords.longitude, quadra: "Minha Localização"
			};
		}, err => {
			console.error("Erro GPS:", err);
		});
	}
}
monitorarLocalizacao();

function alternarMinimizar() {
	const conteudo = document.getElementById('conteudo-rota');
	const icone = document.getElementById('icone-minimizar');
	const painel = document.getElementById('painel-rota');
	if (rotaMinimizada) {
		conteudo.style.display = "block";
		icone.innerText = "▼";
		painel.style.width = "250px";
	} else {
		conteudo.style.display = "none";
		icone.innerText = "▲";
		painel.style.width = "200px";
	}
	rotaMinimizada = !rotaMinimizada;
}

function adicionarARota(local) {
	if (pontosDaRota.find(p => p.quadra === local.quadra)) return;
	pontosDaRota.push(local);
	document.getElementById('painel-rota').style.display = 'block';
	atualizarInterfaceRota();
}

function removerDaRota(index) {
	pontosDaRota.splice(index, 1);
	if (pontosDaRota.length === 0) document.getElementById('painel-rota').style.display = 'none';
	atualizarInterfaceRota();
}

function atualizarInterfaceRota() {
	const ul = document.getElementById('lista-rota-ui');
	const contador = document.getElementById('contador-rota');
	const painel = document.getElementById('painel-rota');
	painel.style.display = pontosDaRota.length > 0 ? 'block': 'none';
	contador.innerText = pontosDaRota.length;
	ul.innerHTML = pontosDaRota.map((p, i) => `
		<li style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; font-size:12px; padding-bottom:5px; border-bottom:1px solid #f9f9f9;">
		<span style="max-width:80%">${p.quadra} - ${p.bairro}</span>
		<button onclick="removerDaRota(${i})" style="color:#ff4444; border:none; background:none; cursor:pointer; font-size:16px; font-weight:bold;">×</button>
		</li>`).join('');
}

function gerarLinkGoogleMaps() {
	if (!localizacaoUsuario) {
		alert("Aguardando seu GPS para iniciar a rota...");
		return;
	}

	let restantes = [...pontosDaRota];
	let pontoAtual = localizacaoUsuario;
	let paradasOtimizadas = [];

	while (restantes.length > 0) {
		let indiceMaisProximo = 0;
		let menorDist = Infinity;

		for (let i = 0; i < restantes.length; i++) {
			let d = Math.sqrt(Math.pow(pontoAtual.lat - restantes[i].lat, 2) + Math.pow(pontoAtual.lng - restantes[i].lng, 2));
			if (d < menorDist) {
				menorDist = d;
				indiceMaisProximo = i;
			}
		}
		pontoAtual = restantes.splice(indiceMaisProximo, 1)[0];
		paradasOtimizadas.push(pontoAtual);
	}

	const origem = `${localizacaoUsuario.lat},${localizacaoUsuario.lng}`;
	const destinoFinal = `${paradasOtimizadas[paradasOtimizadas.length - 1].lat},${paradasOtimizadas[paradasOtimizadas.length - 1].lng}`;
	const paradas = paradasOtimizadas.slice(0, -1).map(p => `${p.lat},${p.lng}`).join('|');

	const url = `https://www.google.com/maps/dir/?api=1&origin=${origem}&destination=${destinoFinal}&waypoints=${paradas}&travelmode=driving`;
	window.open(url, "_blank");
}

function exibirPonto(local) {
	if (!local || !local.lat || !local.lng) return;

	if (typeof marcadorAtual !== 'undefined' && marcadorAtual) {
		map.removeLayer(marcadorAtual);
	}

	const lat = parseFloat(local.lat);
	const lng = parseFloat(local.lng);
	map.flyTo([lat, lng], 16);

	let labelDistancia = '';
	if (typeof calcularDistancia === 'function') {
		const dist = calcularDistancia(lat, lng);
		if (dist) labelDistancia = `<span class="distancia-label">📍 A ${dist} de você</span>`;
	}

	const urlGpsSimples = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

	marcadorAtual = L.marker([lat, lng]).addTo(map).bindPopup(`
		<div class="popup-card">
		<strong>${local.bairro}</strong><br>
		Quadra: ${local.quadra}<br>
		CEP: ${local.cep || '---'}<br>
		${labelDistancia}
		<small style="display:block;margin-top:5px;color:#7f8c8d">${local.obs || ''}</small>
		<button class="btn-gps" onclick="window.open('${urlGpsSimples}', '_blank')" style="width:100%;margin-top:10px;padding:8px;background:#27ae60;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer;">IR PARA O LOCAL</button>
		<button onclick='adicionarARota(${JSON.stringify(local)})' style="width:100%; background:#040853; color:white; padding:8px; border:none; border-radius:5px; cursor:pointer; margin-top:5px;">+ Adicionar à Rota</button>
		</div>`).openPopup();
}

function toggleSuggestMode() {
	modoSugestao = !modoSugestao;
	const btn = document.getElementById('btnSuggest');
	if (btn) btn.classList.toggle('active-mode', modoSugestao);
}

map.on('click', function(e) {
	if (typeof modoSugestao !== 'undefined' && modoSugestao) {
		const urlBase = "https://docs.google.com/forms/d/e/1FAIpQLSc5BV7pRFTZzJW-XfCjkWTLYu16VFZ47qolVYP7eWW4RbxzAg/viewform";
		const coords = `${e.latlng.lat.toFixed(6)},${e.latlng.lng.toFixed(6)}`;
		window.open(`${urlBase}?entry.1414645035=${coords}`, '_blank');
		toggleSuggestMode();
		return;
	}
	let pProx = null;
	let mDistSq = 0.0000002;
	const clickLat = e.latlng.lat;
	const clickLng = e.latlng.lng;
	if (typeof baseDeDados !== 'undefined') {
		for (let i = 0; i < baseDeDados.length; i++) {
			const p = baseDeDados[i];
			const dSq = Math.pow(parseFloat(p.lat) - clickLat, 2) + Math.pow(parseFloat(p.lng) - clickLng, 2);
			if (dSq < mDistSq) {
				mDistSq = dSq;
				pProx = p;
			}
		}
	}
	if (pProx) exibirPonto(pProx);
});

function toggleMenu() {
	const menu = document.getElementById('menu-lateral');
	const overlay = document.getElementById('overlay-menu');
	if (menu && overlay) {
		menu.classList.toggle('active');
		overlay.classList.toggle('active');
	}
}

function alternarTema() {
	modoNoturnoAtivo = !modoNoturnoAtivo;
	const checkbox = document.getElementById('checkNoturno');
	if (checkbox) checkbox.checked = modoNoturnoAtivo;
	document.body.classList.toggle('dark-mode', modoNoturnoAtivo);
	if (!camadaNoturna) {
		camadaNoturna = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
			attribution: '© CARTO'
		});
	}
	if (modoNoturnoAtivo) {
		if (!map.hasLayer(camadaNoturna)) map.addLayer(camadaNoturna);
	} else {
		if (map.hasLayer(camadaNoturna)) map.removeLayer(camadaNoturna);
	}
}

function verificarHorarioNoturno() {
	const hora = new Date().getHours();
	const eNoite = (hora >= 18 || hora < 6);
	if (eNoite !== modoNoturnoAtivo) alternarTema();
}

function limparRotaTotal() {
	if (pontosDaRota.length === 0) return;
	if (confirm("Deseja remover todos os pontos da sua rota atual?")) {
		pontosDaRota = [];
		atualizarInterfaceRota();
	}
}

function reportarErro() {
	window.open("https://forms.gle/w5SMrEuDzKasR1Nb8", '_blank');
}

function abrirGuia() {
	const modal = document.getElementById('modal-aviso');
	if (modal) modal.style.display = 'flex';
}

function toggleLimitesBairros() {
	bairrosAtivos = !bairrosAtivos;
	const checkbox = document.getElementById('checkBairros');
	if (checkbox) checkbox.checked = bairrosAtivos;
	if (bairrosAtivos) {
		if (!camadaBairros && typeof perimetrosBairros !== 'undefined') {
			camadaBairros = L.geoJSON(perimetrosBairros, {
				style: f => ({
					color: f.properties.cor || "#34A853", weight: 3, opacity: 0.8, fillOpacity: 0.2, dashArray: '5, 10'
				}),
				onEachFeature: (f, l) => {
					if (f.properties?.nome) l.bindPopup(`<b>Bairro:</b> ${f.properties.nome}`);
				}
			});
		}
		if (camadaBairros) map.addLayer(camadaBairros);
	} else if (camadaBairros && map.hasLayer(camadaBairros)) {
		map.removeLayer(camadaBairros);
	}
}

window.addEventListener('load', () => {
	const elementoVersao = document.getElementById('versao-exibida');
	if (elementoVersao && typeof VERSAO_SISTEMA !== 'undefined') {
		elementoVersao.innerText = "Versão " + VERSAO_SISTEMA;
	}
	verificarHorarioNoturno();
});
