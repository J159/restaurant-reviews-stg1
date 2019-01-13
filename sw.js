console.log('Alright, sw.js registered!');

const cacheTest = [
  '/',
  '/img/1.jpg'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheTest).then(function(cache) {
      console.log('Caching was a success! Test 01!');
      return cache.addAll(cacheTest);
    })
  );
});
