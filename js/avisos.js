const VERSAO_AVISO = "1.0"; 

function verificarAviso() {
    const versaoLida = localStorage.getItem('versaoAvisoLido');
    const modal = document.getElementById('modal-aviso');
    
    if (modal) {
        if (versaoLida === VERSAO_AVISO) {
            modal.style.display = 'none';
        } else {
            modal.style.display = 'flex';
        }
    }
}

function fecharAviso() {
    const modal = document.getElementById('modal-aviso');
    if (modal) {
        modal.style.display = 'none';
        localStorage.setItem('versaoAvisoLido', VERSAO_AVISO);
    }
}

window.addEventListener('load', verificarAviso);