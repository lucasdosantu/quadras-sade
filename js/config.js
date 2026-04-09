const layerRua = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', { 
    maxZoom: 20, 
    subdomains:['mt0','mt1','mt2','mt3'],
    crossOrigin: true
});

const layerSatelite = L.tileLayer('https://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { 
    maxZoom: 20, 
    subdomains:['mt0','mt1','mt2','mt3'],
    crossOrigin: true
});

const map = L.map('map', { 
    layers: [layerRua],
    zoomControl: true
}).setView([-15.943, -48.265], 20);

let marcadorAtual, marcadorVoce, modoSugestao = false, coordsUsuario = null;

function toggleSatelite() {
    if (map.hasLayer(layerRua)) { 
        map.removeLayer(layerRua); 
        map.addLayer(layerSatelite); 
    } else { 
        map.removeLayer(layerSatelite); 
        map.addLayer(layerRua); 
    }
}