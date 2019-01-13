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

// Event listener will add cache to user
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheVer).then(function(cache) {
      console.log('Caching was a success!');
      return cache.addAll(cacheTest);
    })
  );
});

// Event listener will return cache for offline use
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // return cache if found. Otherwise, fall back to the network
      return response || fetch(event.request);
    })
  );
})
