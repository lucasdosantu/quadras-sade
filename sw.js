const cacheName = 'quadras-v1';
const assets = [
  './',
  './index.html',
  './css/estilo-mapa.css',
  './js/config.js',
  './js/gps.js',
  './js/busca.js',
  './js/acoes.js',
  './dados.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
