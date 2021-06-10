/* eslint-disable no-restricted-globals */
import cacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
    console.log('Installing Service Worker ...');

    event.waitUntil(cacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
    console.log('Activating Service Worker ...');

    event.waitUntil(cacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
    console.log(event.request);

    if (!(event.request.url.indexOf('http') === 0)) return;

    event.respondWith(cacheHelper.revalidateCache(event.request));
});
