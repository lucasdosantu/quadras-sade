function processarBusca() {
    const termo = document.getElementById('mainSearch').value.toLowerCase();
    const encontrado = baseDeDados.find(item => `${item.quadra} - ${item.bairro} (${item.cep || 'Sem CEP'})`.toLowerCase() === termo);
    if (encontrado) {
        exibirPonto(encontrado);
        document.getElementById('mainSearch').blur();
    } else {
        atualizarSugestoes(termo);
    }
}

function atualizarSugestoes(termo) {
    const datalist = document.getElementById('listaSugestoes');
    datalist.innerHTML = "";
    if (termo.length < 1) return;
    baseDeDados.filter(item => item.quadra.toLowerCase().includes(termo) || (item.cep && item.cep.includes(termo)) || item.bairro.toLowerCase().includes(termo))
        .slice(0, 8).forEach(item => {
            const opt = document.createElement('option');
            opt.value = `${item.quadra} - ${item.bairro} (${item.cep || 'Sem CEP'})`;
            datalist.appendChild(opt);
        });
}
