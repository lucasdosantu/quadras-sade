function verificarAviso() {
    const versaoAtual = (typeof VERSAO_SISTEMA !== 'undefined') ? VERSAO_SISTEMA : '1.0.0';

    const versaoLida = localStorage.getItem('versaoAvisoLido');
    const modal = document.getElementById('modal-aviso');

    if (modal) {
        if (versaoLida === versaoAtual) {
            modal.style.display = 'none';
        } else {
            modal.style.display = 'flex';
        }
    }
}

function fecharAviso() {
    const modal = document.getElementById('modal-aviso');
    const versaoAtual = (typeof VERSAO_SISTEMA !== 'undefined') ? VERSAO_SISTEMA : '1.0.0';

    if (modal) {
        modal.style.display = 'none';
        localStorage.setItem('versaoAvisoLido', versaoAtual);
    }
}

window.addEventListener('load', verificarAviso);
