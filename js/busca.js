const mainSearch = document.getElementById('mainSearch');
const listaSugestoes = document.getElementById('listaSugestoesCustom');
const clearSearch = document.getElementById('clearSearch');

let fuse;
let debounceTimer;

function prepararMotorBusca(dados) {
	const opcoes = {
		keys: ['quadra',
			'bairro',
			'cep',
			{
				name: 'obs',
				weight: 0.2
			}],
		threshold: 0.4,
		distance: 100,
		minMatchCharLength: 1,
		includeScore: true,
		useExtendedSearch: true
	};
	fuse = new Fuse(dados, opcoes);
}

function processarBusca() {
	const termoOriginal = mainSearch.value.trim();

	if (termoOriginal.length < 1) {
		fecharSugestoes();
		return;
	}

	let queryFuse;

	if (termoOriginal.includes(',')) {
		const partes = termoOriginal.split(',');
		const qd = partes[0].replace(/quadra|qd|q\./gi, "").trim();
		const br = partes[1] ? partes[1].trim(): "";

		if (br !== "") {
			queryFuse = {
				$or: [{
					$and: [{
						quadra: qd
					},
						{
							bairro: br
						}]
				},
					{
						$path: ['quadra',
							'bairro',
							'obs'],
						$val: termoOriginal.replace(',', ' ')
					}]
			};
		} else {
			queryFuse = qd;
		}
	} else {
		queryFuse = termoOriginal.replace(/quadra|qd|q\./gi, "").trim();
	}

	try {
		const resultados = fuse.search(queryFuse);
		atualizarSugestoes(resultados);
	} catch (e) {
		const backup = fuse.search(termoOriginal);
		atualizarSugestoes(backup);
	}
}

function atualizarSugestoes(resultados) {
	listaSugestoes.innerHTML = "";

	if (!resultados || resultados.length === 0) {
		listaSugestoes.style.display = "none";
		return;
	}

	resultados.slice(0, 10).forEach(({
		item
	}) => {
		const li = document.createElement('li');
		const ref = item.obs ? `${item.obs}`: "";
		const texto = `QD ${item.quadra}, ${item.bairro} (${item.cep || '---'}) 📍 ${ref}`;
		li.textContent = texto;

		li.addEventListener('click', () => {
			if (typeof exibirPonto === 'function') {
				exibirPonto(item);
				mainSearch.value = "";
				fecharSugestoes();
				clearSearch.style.display = 'none';
				mainSearch.blur();
			}
		});

		listaSugestoes.appendChild(li);
	});

	listaSugestoes.style.display = "block";
}

function fecharSugestoes() {
	listaSugestoes.innerHTML = "";
	listaSugestoes.style.display = "none";
}

mainSearch.addEventListener('input', () => {
	clearSearch.style.display = mainSearch.value.length > 0 ? 'block': 'none';
	clearTimeout(debounceTimer);
	debounceTimer = setTimeout(processarBusca,
		250);
});

document.addEventListener('click', (e) => {
	if (e.target !== mainSearch && e.target !== listaSugestoes) {
		fecharSugestoes();
	}
});

clearSearch.addEventListener('click', () => {
	mainSearch.value = "";
	fecharSugestoes();
	clearSearch.style.display = 'none';
	mainSearch.focus();
});

if (typeof baseDeDados !== 'undefined') {
	prepararMotorBusca(baseDeDados);
} else {
	console.error("Erro: 'baseDeDados' não encontrada. Verifique o seu quadras-db.js");
}

if (window.visualViewport) {
	window.visualViewport.addEventListener('resize', () => {
		document.body.style.height = window.visualViewport.height + 'px';

		if (window.visualViewport.height > 500 && mainSearch.value === "") {
			fecharSugestoes();
		}
	});
}