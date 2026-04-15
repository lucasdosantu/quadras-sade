let rotaMinimizada = false;

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
        painel.style.width = "130px";
    }
    rotaMinimizada = !rotaMinimizada;
}

let pontosDaRota = [];

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

    painel.style.display = pontosDaRota.length > 0 ? 'block' : 'none';

    contador.innerText = pontosDaRota.length;

    ul.innerHTML = pontosDaRota.map((p, i) => `
        <li style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; font-size:12px; padding-bottom:5px; border-bottom:1px solid #f9f9f9;">
            <span style="max-width:80%">${p.quadra} - ${p.bairro}</span>
            <button onclick="removerDaRota(${i})" style="color:#ff4444; border:none; background:none; cursor:pointer; font-size:16px; font-weight:bold;">×</button>
        </li>
    `).join('');
}

function gerarLinkGoogleMaps() {
    if (!localizacaoUsuario) {
        alert("Aguardando seu GPS para iniciar a rota...");
        return;
    }

    let rotaOtimizada = [];
    let restantes = [...pontosDaRota];
    let pontoAtual = localizacaoUsuario;

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
        rotaOtimizada.push(pontoAtual);
    }

    const origem = `${localizacaoUsuario.lat},${localizacaoUsuario.lng}`;
    const destinoFinal = `${rotaOtimizada[rotaOtimizada.length - 1].lat},${rotaOtimizada[rotaOtimizada.length - 1].lng}`;
    const paradas = rotaOtimizada.slice(0, -1).map(p => `${p.lat},${p.lng}`).join('|');
    
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

    if (typeof map !== 'undefined') {
        map.flyTo([lat, lng], 16);
    }

    let localizacaoUsuario = null;

    function monitorarLocalizacao() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                localizacaoUsuario = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                    quadra: "Minha Localização"
                };
            });
        }
    }
    monitorarLocalizacao();

    let labelDistancia = '';
    if (typeof calcularDistancia === 'function') {
        const dist = calcularDistancia(lat, lng);
        if (dist) labelDistancia = `<span class="distancia-label">📍 A ${dist} de você</span>`;
    }

    const urlGps = `https://www.google.com/maps/search/?api=1&query=${local.lat},${local.lng}`;

    marcadorAtual = L.marker([lat, lng]).addTo(map).bindPopup(`
        <div class="popup-card">
            <strong>${local.bairro}</strong><br>
            Quadra: ${local.quadra}<br>
            CEP: ${local.cep || '---'}<br>
            ${labelDistancia}
            <small style="display:block;margin-top:5px;color:#7f8c8d">${local.obs || ''}</small>
            <button class="btn-gps" onclick="window.open('${urlGps}', '_blank')" style="width:100%;margin-top:10px;padding:8px;background:#27ae60;color:white;border:none;border-radius:4px;font-weight:bold;">IR PARA O LOCAL</button>
            <button onclick='adicionarARota(${JSON.stringify(local)})' style="width:100%; background:#040853; color:white; padding:8px; border:none; border-radius:5px; cursor:pointer;">+ Adicionar à Rota</button>
        </div>
    `).openPopup();
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
            const dLat = parseFloat(p.lat) - clickLat;
            const dLng = parseFloat(p.lng) - clickLng;
            const dSq = (dLat * dLat) + (dLng * dLng);

            if (dSq < mDistSq) {
                mDistSq = dSq;
                pProx = p;
            }
        }
    }

    if (pProx) {
        exibirPonto(pProx);
    }
});