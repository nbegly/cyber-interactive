const CACHE_NAME = 'NPSBSimsv2';

const assetsToCache = [
  './',
  '/index.html',
  '/manifest.json',
  '/assets/style.css',
  '/assets/app-icon.png',
  '/assets/quiz-images/0001.png',
  '/assets/quiz-images/0002.png',
  '/assets/quiz-images/0003.png',
  '/assets/quiz-images/0004.png',
  '/assets/quiz-images/0005.png',
  '/assets/quiz-images/0006.png',
  '/assets/quiz-images/0007.png',
  '/assets/quiz-images/0008.png',
  '/assets/quiz-images/0009.png',
  '/assets/quiz-images/0010.png',
  '/assets/quiz-images/0011.png',
  '/assets/quiz-images/0012.png',
  '/assets/quiz-images/0013.png',
  '/assets/quiz-images/0014.png',
  '/assets/quiz-images/0015.png',
  '/assets/quiz-images/0016.png',
  '/assets/quiz-images/0017.png',
  '/assets/quiz-images/0018.png',
  '/assets/quiz-images/0019.png',
  '/assets/quiz-images/0020.png',
  '/assets/quiz-images/0021.png',
  '/assets/quiz-images/0022.png',
  '/assets/quiz-images/0023.png',
  '/assets/quiz-images/0024.png',
  '/assets/quiz-images/0025.png',
  '/assets/quiz-images/0026.png',
  '/assets/quiz-images/0027.png',
  '/assets/quiz-images/0028.png',
  '/assets/quiz-images/0029.png',
  '/assets/quiz-images/0030.png',
  '/assets/quiz-images/0031.png',
  '/assets/quiz-images/0032.png',
  '/assets/quiz-images/0033.png',
  '/assets/quiz-images/0034.png',
  '/assets/quiz-images/0035.png',
  '/assets/quiz-images/0036.png',
  '/assets/quiz-images/0037.png',
  '/assets/quiz-images/0038.png',
  '/assets/quiz-images/0039.png',
  '/assets/quiz-images/0040.png',
  '/assets/quiz-images/0041.png',
  '/assets/quiz-images/0042.png',
  '/assets/quiz-images/0043.png',
  '/assets/quiz-images/0044.png',
  '/assets/quiz-images/0045.png',
  '/assets/quiz-images/0046.png',
  '/assets/quiz-images/0047.png',
  '/assets/quiz-images/0048.png',
  '/assets/quiz-images/0049.png',
  '/assets/quiz-images/0050.png',
  '/assets/quiz-images/0051.png',
  '/assets/quiz-images/0052.png',
  '/assets/quiz-images/0053.png',
  '/assets/quiz-images/0054.png',
  '/assets/quiz-images/0055.png',
  '/assets/quiz-images/0056.png',
  '/assets/quiz-images/0057.png',
  '/assets/quiz-images/0058.png',
  '/assets/quiz-images/0059.png',
  '/assets/quiz-images/0060.png',
  '/assets/quiz-images/0061.png',
  '/assets/quiz-images/0062.png',
  '/assets/quiz-images/0063.png',
  '/assets/quiz-images/0064.png',
  '/assets/quiz-images/0065.png',
  '/assets/quiz-images/0066.png',
  '/assets/quiz-images/0067.png',
  '/assets/quiz-images/0068.png',
  '/assets/quiz-images/0069.png',
  '/assets/quiz-images/0070.png',
  '/assets/quiz-images/0071.png',
  '/assets/quiz-images/0072.png',
  '/assets/quiz-images/0073.png',
  '/assets/quiz-images/0074.png',
  '/assets/quiz-images/0075.png',
  '/assets/quiz-images/0076.png',
  '/assets/quiz-images/0077.png',
  '/assets/quiz-images/0078.png',
  '/assets/quiz-images/0079.png',
  '/assets/quiz-images/0080.png',
  '/assets/quiz-images/0081.png',
  '/assets/quiz-images/0082.png',
  '/assets/quiz-images/0083.png',
  '/assets/quiz-images/0084.png',
  '/assets/quiz-images/0085.png',
  '/assets/quiz-images/0086.png',
  '/assets/quiz-images/0087.png',
  '/assets/quiz-images/0088.png',
  '/assets/quiz-images/0089.png',
  '/assets/quiz-images/0090.png',
  '/assets/quiz-images/0091.png',
  '/assets/quiz-images/0092.png',
  '/assets/quiz-images/0093.png',
  '/assets/quiz-images/0094.png',
  '/assets/quiz-images/0095.png',
  '/assets/quiz-images/0096.png',
  '/assets/quiz-images/0097.png',
  '/assets/quiz-images/0098.png',
  '/assets/quiz-images/0099.png',
  '/assets/quiz-images/0100.png',
  '/assets/quiz-images/0101.png',
  '/assets/quiz-images/0102.png',
  '/assets/quiz-images/0103.png',
  '/assets/quiz-images/0104.png',
  '/assets/quiz-images/0105.png',
  '/assets/quiz-images/0106.png',
  '/assets/quiz-images/0107.png',
  '/assets/quiz-images/0108.png',
  '/assets/quiz-images/0109.png',
  '/assets/quiz-images/0110.png',
  '/assets/quiz-images/0111.png',
  '/assets/quiz-images/0112.png',
  '/assets/quiz-images/0113.png',
  '/assets/quiz-images/0114.png',
  '/assets/quiz-images/0115.png',
  '/assets/quiz-images/0116.png',
  '/assets/quiz-images/0117.png',
  '/assets/quiz-images/0118.png',
  '/assets/quiz-images/0119.png',
  '/assets/quiz-images/0120.png',
  '/assets/quiz-images/0121.png',
  '/assets/quiz-images/0122.png',
  '/assets/quiz-images/0123.png',
  '/assets/quiz-images/0124.png',
  '/assets/quiz-images/0125.png',
  '/assets/quiz-images/1001.png',
  '/assets/quiz-images/1002.png',
  '/assets/quiz-images/9999.png'
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
  '/simulations/net-plus/index.html',
  '/simulations/security-plus/index.html',
  '/simulations/security-x/index.html',
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