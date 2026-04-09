function exibirPonto(local) {
    if (marcadorAtual) map.removeLayer(marcadorAtual);
    map.flyTo([local.lat, local.lng], 18);
    const dist = calcularDistancia(local.lat, local.lng);
    const labelDistancia = dist ? `<span class="distancia-label">📍 A ${dist} de você</span>` : '';
    const urlGps = `https://www.google.com/maps/search/?api=1&query=${local.lat},${local.lng}`;
    
    marcadorAtual = L.marker([local.lat, local.lng]).addTo(map).bindPopup(`
        <div class="popup-card">
            <strong>${local.bairro}</strong><br>Quadra: ${local.quadra}<br>CEP: ${local.cep || '---'}<br>${labelDistancia}
            <small style="display:block;margin-top:5px;color:#7f8c8d">${local.obs || ''}</small>
            <button class="btn-gps" onclick="window.open('${urlGps}', '_blank')">ABRIR NO GPS</button>
        </div>
    `).openPopup();
}

function toggleSuggestMode() {
    modoSugestao = !modoSugestao;
    document.getElementById('btnSuggest').classList.toggle('active-mode', modoSugestao);
}

map.on('click', (e) => {
    if (modoSugestao) {
        const urlBase = "https://docs.google.com/forms/d/e/1FAIpQLSc5BV7pRFTZzJW-XfCjkWTLYu16VFZ47qolVYP7eWW4RbxzAg/viewform";
        window.open(`${urlBase}?entry.1414645035=${e.latlng.lat.toFixed(6)},${e.latlng.lng.toFixed(6)}`, '_blank');
        toggleSuggestMode();
        return;
    }
    let pProx = null, mDist = 0.00045;
    baseDeDados.forEach(p => {
        const d = Math.sqrt(Math.pow(p.lat - e.latlng.lat, 2) + Math.pow(p.lng - e.latlng.lng, 2));
        if (d < mDist) { mDist = d; pProx = p; }
    });
    if (pProx) exibirPonto(pProx);
});
