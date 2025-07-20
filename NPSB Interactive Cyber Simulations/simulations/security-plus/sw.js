const CACHE_NAME = 'sec-plus-sims-v1'; // <--- Changed from v1 to v2

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
