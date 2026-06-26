// Minimal service worker — required for PWA install, no caching
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
