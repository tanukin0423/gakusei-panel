// 就活の木｜最小構成のService Worker
// 目的：PC/スマートフォンでの「ホーム画面に追加（インストール）」対応。
// 現時点ではキャッシュの保持は行わず、通常のネットワーク通信をそのまま中継します。
// （ツール群を頻繁に更新する運用のため、古いキャッシュが表示される事故を避けています）

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
