const CACHE_NAME = 'NPSB-DO';

const assetsToCache = [
  './',
  '/index.html',
  '/manifest.json',
  '/assets/style.css',
  '/assets/app-icon.png',
  '/assets/app-icon.ico',
  '/assets/9999.png'
];

const URLS_TO_CACHE = [
  '/index.html',  
  '/practice-exams/index.html',  
  '/practice-exams/cysa-plus/quiz.html',
  '/practice-exams/linux-plus/quiz.html',
  '/practice-exams/security-plus/quiz.html',
  '/practice-exams/security-x/quiz.html',
  '/practice-exams/splunkccu/quiz.html',
  '/simulations/index.html',
  '/simulations/linux-plus/index.html',
  '/simulations/linux-plus/sims/sim1.html',
  '/simulations/linux-plus/sims/sim2.html',
  '/simulations/linux-plus/sims/sim3.html',
  '/simulations/linux-plus/sims/sim4.html',
  '/simulations/linux-plus/sims/sim5.html',
  '/simulations/linux-plus/sims/sim6.html',
  '/simulations/linux-plus/sims/sim7.html',
  '/simulations/linux-plus/sims/sim8.html',
  '/simulations/net-plus/index.html',
  '/simulations/net-plus/sims/sim1.html',
  '/simulations/security-plus/index.html',
  '/simulations/security-plus/sims/sim1.html',
  '/simulations/security-plus/sims/sim2.html',
  '/simulations/security-plus/sims/sim3.html',
  '/simulations/security-plus/sims/sim4.html',
  '/simulations/security-plus/sims/sim5.html',
  '/simulations/security-plus/sims/sim6.html',
  '/simulations/security-plus/sims/sim7.html',
  '/simulations/security-plus/sims/sim8.html',
  '/simulations/security-plus/sims/sim9.html',
  '/simulations/security-plus/sims/sim10.html',
  '/simulations/security-plus/sims/sim11.html',
  '/simulations/security-plus/sims/sim12.html',
  '/simulations/security-plus/sims/sim13.html',
  '/simulations/security-plus/sims/sim14.html',
  '/simulations/security-x/index.html',
  '/simulations/security-x/sims/sim1.html',
  '/simulations/security-x/sims/sim2.html',
  '/simulations/security-x/sims/sim3.html',
  '/simulations/security-x/sims/sim4.html',
  '/simulations/security-x/sims/sim5.html',
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