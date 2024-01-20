const PATH=[
  './'
]
const CACHE_NAME = 'Advance';
const STATIC_CACHE_URLS = PATH;
const DYNAMIC_CACHE_NAME = 'Advance-Storage';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_CACHE_URLS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName.startsWith('Movie-Lander-V.')) {
            // Delete old cache versions
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Asset served from cache
        return cachedResponse;
      }

      return fetch(event.request)
        .then((response) => {
          // Clone the response before caching it
          const responseClone = response.clone();

          // Cache the fetched response in the dynamic cache
          caches.open(DYNAMIC_CACHE_NAME).then((cache) => cache.put(event.request, responseClone));

          // Asset fetched from server and cached
          return response;
        })
        .catch(() => {
          // If the asset is not in the cache and fetching from the server fails,
          // there is no need to show the offline page. Return an empty response.
          return new Response('', { status: 404, statusText: 'Not Found' });
        });
    })
  );
});
