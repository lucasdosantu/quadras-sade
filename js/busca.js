const mainSearch = document.getElementById('mainSearch');
const listaSugestoes = document.getElementById('listaSugestoes');
const clearSearch = document.getElementById('clearSearch');

let fuse;
let debounceTimer;

function prepararMotorBusca(dados) {
    const opcoes = {
        keys: [
            { name: 'quadra', weight: 0.7 },
            { name: 'bairro', weight: 0.5 },
            { name: 'cep', weight: 0.2 }
        ],
        threshold: 0.3,
        findAllMatches: true,
        useExtendedSearch: true
    };

    fuse = new Fuse(dados, opcoes);
}

mainSearch.addEventListener('input', () => {
    clearSearch.style.display = mainSearch.value.length > 0 ? 'block' : 'none';
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const termo = mainSearch.value.trim();
        
        if (termo.length < 2) {
            listaSugestoes.innerHTML = "";
            return;
        }

        const resultados = fuse.search(termo);

        verificarMatchExato(resultados, termo);
        atualizarSugestoes(resultados);
    }, 250);
});

clearSearch.addEventListener('click', () => {
    mainSearch.value = "";
    listaSugestoes.innerHTML = "";
    clearSearch.style.display = 'none';
    mainSearch.focus();
});

function atualizarSugestoes(resultados) {
    listaSugestoes.innerHTML = "";

    if (resultados.length === 0) {
        const opt = document.createElement('option');
        opt.value = "Nenhuma quadra encontrada";
        opt.disabled = true;
        listaSugestoes.appendChild(opt);
        return;
    }

    const topResultados = resultados.slice(0, 10);

    topResultados.forEach(({ item }) => {
        const opt = document.createElement('option');
        opt.value = `${item.quadra} - ${item.bairro} (${item.cep || 'Sem CEP'})`;
        listaSugestoes.appendChild(opt);
    });
}

function verificarMatchExato(resultados, termo) {
    if (resultados.length > 0) {
        const melhorMatch = resultados[0].item;
        const stringComparacao = `${melhorMatch.quadra} - ${melhorMatch.bairro} (${melhorMatch.cep || 'Sem CEP'})`.toLowerCase();
        
        if (stringComparacao === termo.toLowerCase()) {
            if (typeof exibirPonto === 'function') {
                exibirPonto(melhorMatch);
                mainSearch.blur();
                listaSugestoes.innerHTML = "";
            }
        }
    }
}

prepararMotorBusca(baseDeDados);