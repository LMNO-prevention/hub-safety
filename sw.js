// Service worker minimal : garde l'écran de démarrage en mémoire pour que l'icône s'ouvre même sans réseau.
// (Les données du HUB, elles, restent sur Google : rien n'est stocké ici.)
var VERSION = "hub-safety-v1";
var COQUILLE = ["./", "index.html", "config.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(COQUILLE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;   // le HUB (Google) ne passe jamais par ici
  e.respondWith(
    fetch(req).then(function (rep) {
      var copie = rep.clone(); caches.open(VERSION).then(function (c) { c.put(req, copie); });
      return rep;
    }).catch(function () { return caches.match(req).then(function (r) { return r || caches.match("index.html"); }); })
  );
});
