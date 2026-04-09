function minhaLocalizacao() { 
    map.locate({setView: true, maxZoom: 16}); 
}

map.on('locationfound', (e) => {
    coordsUsuario = e.latlng;

    if (marcadorVoce) {
        marcadorVoce.setLatLng(e.latlng);
    } else {
        marcadorVoce = L.circle(e.latlng, {
            radius: 12, 
            color: '#3498db', 
            fillColor: '#3498db', 
            fillOpacity: 0.6
        }).addTo(map);
    }
});

map.on('locationerror', (e) => {
    console.warn("Não foi possível obter sua localização exata.");
});

function calcularDistancia(lat2, lon2) {
    if (!coordsUsuario) return null;

    const R = 6371; 
    const dLat = (lat2 - coordsUsuario.lat) * Math.PI / 180;
    const dLon = (lon2 - coordsUsuario.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(coordsUsuario.lat * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const d = R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
    
    return d > 1 ? d.toFixed(1) + " km" : Math.round(d * 1000) + " m";
}