self.addEventListener("install", (event) => {
  event.waitUntil(caches.open("second-brain-v1").then((cache) => cache.addAll(["/", "/icon.svg"])));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
