// Adicione esta variável no topo se ela ainda não estiver no config.js
let marcadorAtual = null;

function exibirPonto(local) {
    if (marcadorAtual) map.removeLayer(marcadorAtual);

    map.flyTo([local.lat, local.lng], 18);

    const dist = (typeof calcularDistancia === 'function') ? calcularDistancia(local.lat, local.lng) : null;
    const labelDistancia = dist ? `<span class="distancia-label">📍 A ${dist} de você</span>` : '';
    
    // CORREÇÃO: URL corrigida para abrir o GPS do Google Maps corretamente
    const urlGps = `https://www.google.com/maps/dir/?api=1&destination=${local.lat},${local.lng}`;

    marcadorAtual = L.marker([local.lat, local.lng]).addTo(map).bindPopup(`
        <div class="popup-card">
            <div style="margin-bottom:8px">
                <strong style="font-size:1.1em">${local.bairro}</strong><br>
                <span>Quadra: ${local.quadra}</span><br>
                <small>CEP: ${local.cep || '---'}</small>
            </div>
            ${labelDistancia}
            <small style="display:block;margin:5px 0;color:#7f8c8d;font-style:italic">${local.obs || ''}</small>
            <button class="btn-gps" onclick="window.open('${urlGps}', '_blank')" 
                    style="width:100%; padding:10px; background:#27ae60; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold; margin-top:5px">
                IR PARA O LOCAL
            </button>
        </div>
    `).openPopup();
}

function toggleSuggestMode() {
    modoSugestao = !modoSugestao;
    const btn = document.getElementById('btnSuggest');
    if (btn) {
        btn.classList.toggle('active-mode', modoSugestao);
        btn.style.background = modoSugestao ? '#e74c3c' : ''; // Feedback visual imediato
    }
}

map.on('click', (e) => {
    if (modoSugestao) {
        const urlBase = "https://docs.google.com/forms/d/e/1FAIpQLSc5BV7pRFTZzJW-XfCjkWTLYu16VFZ47qolVYP7eWW4RbxzAg/viewform";
        const coords = `${e.latlng.lat.toFixed(6)},${e.latlng.lng.toFixed(6)}`;
        window.open(`${urlBase}?usp=pp_url&entry.1414645035=${coords}`, '_blank');
        toggleSuggestMode();
        return;
    }

    let pProx = null;
    let mDist = 0.00045; // Raio de clique (aproximadamente 50 metros)

    baseDeDados.forEach(p => {
        const d = Math.sqrt(Math.pow(p.lat - e.latlng.lat, 2) + Math.pow(p.lng - e.latlng.lng, 2));
        if (d < mDist) {
            mDist = d;
            pProx = p;
        }
    });

    if (pProx) {
        exibirPonto(pProx);
    }
});