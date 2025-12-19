const CACHE_NAME = 'edunova-v1';
const urlsToCache = [
  './',
  './index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );

  

});

const GITHUB_CONFIG = {
    USERNAME: 'codewiz2025',  // Change this
    REPO: 'EduNova',         // Keep this
    TOKEN: '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',     // Paste your token
    USE_GITHUB_DB: true,              // Change to true
};
