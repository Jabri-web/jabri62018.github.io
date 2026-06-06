const CACHE_NAME = 'jabri6218.github.io';
const FILES = [
  './index.html',
  './manifest.json',
  './Jabri_photo.png'
  // ضيف هنا باقي ملفات البروفايل لو فيه
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});