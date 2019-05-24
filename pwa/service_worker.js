// キャッシュファイルの指定
var CACHE_NAME = 'm-u-jaswill-caches';
var urlsToCache = [
    '/m-u-jaswill.github.io/',
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});

self.addEventListener('push', function(event) {
	var title = "プッシュ通知ですよ";
	var body = "これは成功といえるでしょう";

	event.waitUntil(
		self.registration.showNotification(title, {
			body: body,
			icon: 'https://m-u-jaswill.github.io/pwa/images/icon/favicon.png',
			tag: 'push-notification-tag'
		})
	);
});
self.addEventListener('notificationclick', function(event) {
	event.notification.close();
	clients.openWindow("/");
}),false);