// Service Worker インストール時に実行される
addEventListener('install', (event) => {
    console.log('service worker install ...');
});

// Service Worker アクティベート時に実行される
addEventListener('activate', (event) => {
  console.info('activate', event);
});