importScripts('js/versao.js');

const CACHE_NAME = 'sade-cache-v' + VERSAO_SISTEMA;
const cacheName = 'sade-localizador-v1';
const assets = ['./', './index.html', './manifest.json', './css/styles.css', './js/config.js', './js/gps.js', './js/busca.js', './js/perimetros.js', './js/acoes.js', './js/avisos.js', './js/versao.js', './js/quadras-db.js', './img/icon_512.png', 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'];

self.addEventListener('install', e => { e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets))); self.skipWaiting(); });

self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => { return Promise.all(keys.map(key => { if (key !== cacheName) { return caches.delete(key); } })); })); self.clients.claim(); });

self.addEventListener('fetch', e => { e.respondWith(caches.open(cacheName).then(cache => { return cache.match(e.request).then(cachedResponse => { const networkFetch = fetch(e.request).then(networkResponse => { if (networkResponse.status === 200) { cache.put(e.request, networkResponse.clone()); } return networkResponse; }).catch(() => {}); return cachedResponse || networkFetch; }); })); });