const CACHE_NAME = 'v1-cache';
const ASSETS_TO_CACHE = ['/', '/index.html', '/src/main.jsx'];

// cache core assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Service Worker: Caching files');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    // force the waiting service worker to become the active service worker
    self.skipWaiting();
});

// clean up old caches
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
    // allow the service worker to take control of the pages immediately
    self.clients.claim();
});

// cache-first strategy with network fallback
self.addEventListener('fetch', event => {
    // only handle standard http/https GET requests, skip browser extensions, etc.)
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) return;
    event.respondWith(
        caches
            .match(event.request)
            .then(cachedResponse => {
                // return cached file, if found, otherwise fetch from network
                return (
                    cachedResponse ||
                    fetch(event.request).then(networkResponse => {
                        // cache new successful responses dynamically
                        if (event.request.method === 'GET' && networkResponse.status === 200) {
                            return caches.open(CACHE_NAME).then(cache => {
                                cache.put(event.request, networkResponse.clone());
                                return networkResponse;
                            });
                        }
                        return networkResponse;
                    })
                );
            })
            .catch(() => {
                // fallback page if network fails and asset isn't cached
                if (event.request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            })
    );
});
