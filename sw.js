const cacheName = 'mapa-sad-v' + new Date().toISOString().slice(0,10).replace(/-/g, '');
const tileCacheName = 'mapa-tiles-v' + new Date().toISOString().slice(0,10).replace(/-/g, '');

const assets = [
  './',
  './index.html',
  './css/estilo-mapa.css',
  './js/config.js',
  './js/gps.js',
  './js/busca.js',
  './js/acoes.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName && key !== tileCacheName)
            .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Sempre buscar dados.js da rede para garantir dados atualizados
  if (url.pathname.includes('dados.js')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Cache strategy para tiles do Google Maps
  if (url.host.includes('google.com') && url.pathname.includes('vt')) {
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
    // Cache-first para outros assets
    e.respondWith(
      caches.match(e.request).then(res => res || fetch(e.request))
    );
  }
});
