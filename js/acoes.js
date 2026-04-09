function exibirPonto(local) {
    if (!map) return;
    if (marcadorAtual) map.removeLayer(marcadorAtual);

    map.flyTo([local.lat, local.lng], 18);

    let labelDistancia = '';
    try {
        const dist = calcularDistancia(local.lat, local.lng);
        if (dist) labelDistancia = `<span class="distancia-label">📍 A ${dist} de você</span>`;
    } catch (e) { console.log("GPS ainda não obteve posição"); }

    const urlGps = `https://www.google.com/maps/dir/?api=1&destination=${local.lat},${local.lng}`;

    marcadorAtual = L.marker([local.lat, local.lng]).addTo(map).bindPopup(`
        <div class="popup-card">
            <strong>${local.bairro}</strong><br>
            Quadra: ${local.quadra}<br>
            CEP: ${local.cep || '---'}<br>
            ${labelDistancia}
            <small style="display:block;margin-top:5px;color:#7f8c8d">${local.obs || ''}</small>
            <button class="btn-gps" onclick="window.open('${urlGps}', '_blank')">IR PARA O LOCAL</button>
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