const CACHE_NAME = 'sec-plus-sims-v2'; // <--- Changed from v1 to v2

// The complete list of files to cache for offline use.
const assetsToCache = [
  './',
  'index.html',
  'manifest.json',
  'assets/style.css',
  'assets/app-icon.png',
];

const URLS_TO_CACHE = [
  'practice-exams\cysa-plus\quiz.html',
  'practice-exams\linux-plus\quiz.html',
  'practice-exams\security-plus\quiz.html',
  'practice-exams\security-x\quiz.html',
  'practice-exams\splunkccu\quiz.html',
  '/manifest.json', 
  '/assets/style.css', 
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching all application files');
        return cache.addAll(assetsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
