function exibirPonto(local) {
    if (!local || typeof local.lat === 'undefined' || typeof local.lng === 'undefined') return;

    if (typeof marcadorAtual !== 'undefined' && marcadorAtual) {
        map.removeLayer(marcadorAtual);
    }

    const lat = parseFloat(local.lat);
    const lng = parseFloat(local.lng);

    map.flyTo([lat, lng], 18);

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