const CACHE_NAME = "srm-wifi-v1";
const ASSETS = ["index.html", "manifest.json"];

// Cache assets on install
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// Serve assets offline
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
