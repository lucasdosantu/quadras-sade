const visualUsuarioGps = L.divIcon({
	className: 'marcador-usuario-container',
	html: `
	<div class="direcao-seta" id="seta-usuario"></div>
	<div class="bolinha-usuario"></div>
	`,
	iconSize: [30, 30],
	iconAnchor: [15, 15]
});


var marcadorVoce = marcadorVoce || null;
var coordsUsuario = coordsUsuario || null;
var rastreandoAtivo = false;
var watchID = null;

function minhaLocalizacao() {
	if (rastreandoAtivo && coordsUsuario) {
		map.setView(coordsUsuario, 16);
		return;
	}

	if (!navigator.geolocation) {
		alert("Seu navegador não suporta geolocalização.");
		return;
	}

	const geoOptions = {
		enableHighAccuracy: true,
		maximumAge: 1000,
		timeout: 10000
	};

	rastreandoAtivo = true;

	watchID = navigator.geolocation.watchPosition(sucessoGPS, erroGPS, geoOptions);
}

function sucessoGPS(pos) {
	const lat = pos.coords.latitude;
	const lng = pos.coords.longitude;
	coordsUsuario = L.latLng(lat, lng);

	if (marcadorVoce) {
		marcadorVoce.setLatLng(coordsUsuario);
	} else {
		marcadorVoce = L.marker(coordsUsuario, {
			icon: visualUsuarioGps,
			interactive: false
		}).addTo(map);
		map.setView(coordsUsuario, 16);
	}
}

function erroGPS(err) {
	console.warn("Erro no GPS: " + err.message);
	rastreandoAtivo = false;
}

function calcularDistancia(lat2, lon2) {
	if (!coordsUsuario) return null;
	const R = 6371;
	const dLat = (lat2 - coordsUsuario.lat) * Math.PI / 180;
	const dLon = (lon2 - coordsUsuario.lng) * Math.PI / 180;
	const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.cos(coordsUsuario.lat * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
	const d = R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
	return d > 1 ? d.toFixed(1) + " km": Math.round(d * 1000) + " m";
}

window.addEventListener('deviceorientationabsolute', (event) => {
	let bussola = event.alpha;
	if (event.webkitCompassHeading) bussola = event.webkitCompassHeading;

	if (bussola !== null) {
		const setaElemento = document.getElementById('seta-usuario');
		if (setaElemento) {
			let direcaoReal = (360 - bussola);
			setaElemento.style.transform = `rotate(${direcaoReal}deg)`;
		}
	}
}, true);