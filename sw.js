// Service worker mínimo — necessário para o navegador permitir "Instalar app".
// Não faz cache agressivo: sempre busca a versão mais recente na rede.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
