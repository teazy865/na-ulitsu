self.addEventListener("install", (e) => {
  e.waitUntil(caches.open("naulitsu-v2").then((c) => c.addAll(["./", "./index.html", "./manifest.webmanifest", "./icon.svg"])));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== "naulitsu-v2").map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
