const CACHE_NAME = 'sec-plus-sims-v2'; // <--- Changed from v1 to v2

// The complete list of files to cache for offline use.
const assetsToCache = [
  './',
  'index.html',
  'manifest.json',
  'assets/style.css',
  'assets/app-icon.png',
  'sims/sim1.html',
  'sims/sim2.html',
  'sims/sim3.html',
  'sims/sim4.html',
  'sims/sim5.html',
  'sims/sim6.html',
  'sims/sim7.html',
  'sims/sim8.html',
  'sims/sim9.html',
  'sims/sim10.html',
  'sims/sim11.html',
  'sims/sim12.html',
  'sims/sim13.html',
  'sims/sim14.html'
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

// Install event: cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching all application files');
        return cache.addAll(assetsToCache);
      })
  );
});

// Activate event: clean up old caches
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

// Fetch event: serve from cache first, then network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
