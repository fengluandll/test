self.addEventListener('fetch', event => {
    if (/\.jpg$/.test(event.request.url)) {
        event.respondWith(fetch('/images/unicorn.jpg'));
    }
});

