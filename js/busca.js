const mainSearch = document.getElementById('mainSearch');
const listaSugestoes = document.getElementById('listaSugestoes');
const clearSearch = document.getElementById('clearSearch');

let fuse;
let debounceTimer;

function prepararMotorBusca(dados) {
    const opcoes = {
        keys: [
            { name: 'quadra', weight: 0.9 },
            { name: 'bairro', weight: 0.4 },
            { name: 'cep', weight: 0.7 }
        ],
        threshold: 0.2,
        location: 0,
        distance: 70,
        minMatchCharLength: 1,
        findAllMatches: true,
        useExtendedSearch: true
    };
    fuse = new Fuse(dados, opcoes);
}

function processarBusca() {
    const termoOriginal = mainSearch.value.trim();

    if (termoOriginal.length < 1) {
        listaSugestoes.innerHTML = "";
        return;
    }

    let termoProcessado = termoOriginal.length > 3 
        ? termoOriginal.replace(/quadra|bairro|cep|[.,]/gi, "").replace(/-/g, "").trim() 
        : termoOriginal;

    const tokens = termoProcessado.split(/\s+/);
    const termoFinal = tokens.length > 1 
        ? tokens.map(t => `'${t}`).join(' ') 
        : termoProcessado;

    const resultados = fuse.search(termoFinal);

    atualizarSugestoes(resultados);
    verificarMatchExato(resultados, termoOriginal);
}

  mainSearch.addEventListener('input', () => {
     clearSearch.style.display = mainSearch.value.length > 0 ? 'block' : 'none';
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(processarBusca, 250);
});

  mainSearch.addEventListener('change', processarBusca);

  clearSearch.addEventListener('click', () => {
    mainSearch.value = "";
    listaSugestoes.innerHTML = "";
    clearSearch.style.display = 'none';
    mainSearch.focus();
});

function atualizarSugestoes(resultados) {
    listaSugestoes.innerHTML = "";
    if (resultados.length === 0) return;

    resultados.slice(0, 10).forEach(({ item }) => {
        const opt = document.createElement('option');
        opt.value = `${item.quadra} - ${item.bairro} (${item.cep || 'Sem CEP'})`;
        listaSugestoes.appendChild(opt);
    });
}

function verificarMatchExato(resultados, termo) {
    if (!termo || termo.length < 3) return; 

    const termoLimpo = termo.toLowerCase().trim();

    const matchReal = baseDeDados.find(item => {
        const formatoLista = `${item.quadra} - ${item.bairro} (${item.cep || 'Sem CEP'})`.toLowerCase();
        return formatoLista === termoLimpo;
    });

    if (matchReal && typeof exibirPonto === 'function') {
        exibirPonto(matchReal);
        mainSearch.blur(); 
        listaSugestoes.innerHTML = "";

        clearTimeout(debounceTimer);
    }
}

if (typeof baseDeDados !== 'undefined') {
    prepararMotorBusca(baseDeDados);
}