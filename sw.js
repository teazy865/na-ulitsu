self.addEventListener("install", (e) => {
  e.waitUntil(caches.open("naulitsu-v1").then((c) => c.addAll(["./", "./index.html", "./manifest.webmanifest", "./icon.svg"])));
});
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
