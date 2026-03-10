const CACHE = "fuellog-v3";
const BASE = "/fuellog";

const ASSETS = [
  BASE + "/",
  BASE + "/index.html",
  BASE + "/manifest.json",
  BASE + "/icon-192.png",
  BASE + "/icon-512.png",
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.url.includes("anthropic.com")) return;
  if (e.request.url.includes("googleapis.com") || e.request.url.includes("cdnjs.cloudflare.com")) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok && e.request.method === "GET" && e.request.url.startsWith(self.location.origin)) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match(BASE + "/index.html");
        }
      });
    })
  );
});
