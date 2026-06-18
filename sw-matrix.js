// 就活の木｜556マトリックス専用 Service Worker
// 目的：このページ単体をホーム画面に追加（インストール）できるようにするための最小構成。
// 就活の木本体（index.html用のsw.js）とは別ファイル・別スコープなので、互いに干渉しません。
// キャッシュは保持せず、通常のネットワーク通信をそのまま中継します。

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
