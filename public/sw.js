var cacheName = 'v2.1';
var filesToCache = [
    '../images/logo.jpeg',
    '/index.html',
    '/',
    '../stylesheets/style.css',
    '../javascripts/main.js',
    '../javascripts/sudoku.js',
    '../javascripts/firebase_functions.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});

