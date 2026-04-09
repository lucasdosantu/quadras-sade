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
    zoomControl: false
}).setView([-15.943, -48.265], 13);

var marcadorAtual = null;
var marcadorVoce = null;
var modoSugestao = false;
var coordsUsuario = null;

function toggleSatelite() {
    if (map.hasLayer(layerRua)) { 
        map.removeLayer(layerRua); 
        map.addLayer(layerSatelite); 
    } else { 
        map.removeLayer(layerSatelite); 
        map.addLayer(layerRua); 
    }
}