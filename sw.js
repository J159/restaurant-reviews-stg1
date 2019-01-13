console.log('Alright, sw.js registered!');

// Cache variables
const cacheVer = 'cache-v1';
const cacheTest = [
  '/',
  'index.html',
  'restaurant.html',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restaurants.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheVer).then(function(cache) {
      console.log('Caching was a success! Test 01!');
      return cache.addAll(cacheTest);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
})
