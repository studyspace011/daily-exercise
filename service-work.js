self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('exercise-tracker-v1').then(cache => {
            return cache.addAll([
                '/index.html',
                'https://cdn.tailwindcss.com',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
                'https://cdn.jsdelivr.net/npm/chart.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
