const mainSearch = document.getElementById('mainSearch');
const listaSugestoes = document.getElementById('listaSugestoes');

mainSearch.addEventListener('input', () => {
    processarBusca();
});

function processarBusca() {
    const termo = mainSearch.value.toLowerCase();
    
    const encontrado = baseDeDados.find(item => 
        `${item.quadra} - ${item.bairro} (${item.cep || 'Sem CEP'})`.toLowerCase() === termo
    );

    if (encontrado) {
        if (typeof exibirPonto === 'function') {
            exibirPonto(encontrado);
            mainSearch.blur();
            listaSugestoes.innerHTML = "";
        }
    } else {
        atualizarSugestoes(termo);
    }
}

function atualizarSugestoes(termo) {
    listaSugestoes.innerHTML = "";
    if (termo.length < 1) return;

    const filtrados = baseDeDados.filter(item => 
        item.quadra.toLowerCase().includes(termo) || 
        (item.cep && item.cep.includes(termo)) || 
        item.bairro.toLowerCase().includes(termo)
    );

    filtrados.sort((a, b) => {
        if (a.bairro !== b.bairro) return a.bairro.localeCompare(b.bairro);
        const numA = parseInt(a.quadra.replace(/\D/g, '')) || 0;
        const numB = parseInt(b.quadra.replace(/\D/g, '')) || 0;
        return numA - numB;
    });

    filtrados.slice(0, 8).forEach(item => {
        const opt = document.createElement('option');
        opt.value = `${item.quadra} - ${item.bairro} (${item.cep || 'Sem CEP'})`;
        listaSugestoes.appendChild(opt);
    });
}
