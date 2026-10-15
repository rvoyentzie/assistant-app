// Minimal service worker: makes the page installable. Network only, nothing cached,
// so a new deploy is live on the next open.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
