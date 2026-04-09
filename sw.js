const cacheName = 'mapa-sad-v1';
const tileCacheName = 'mapa-tiles-v1';

const assets = [
  './',
  './index.html',
  './css/estilo-mapa.css',
  './js/config.js',
  './js/gps.js',
  './js/busca.js',
  './js/acoes.js',
  './dados.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  if (url.host === 'mt0.google.com' || url.host === 'mt1.google.com' || url.host === 'mt2.google.com' || url.host === 'mt3.google.com') {
    e.respondWith(
      caches.open(tileCacheName).then(cache => {
        return cache.match(e.request).then(response => {
          return response || fetch(e.request).then(networkResponse => {
            cache.put(e.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(res => res || fetch(e.request))
    );
  }
});