(function () {
    function insertBanner() {
        var content = document.querySelector('.content');
        if (!content || document.querySelector('.attribution-banner')) return;

        var banner = document.createElement('div');
        banner.className = 'attribution-banner';
        banner.innerHTML =
            '<span class="attr-title">翻譯 Wish 隨筆</span>' +
            '<span class="attr-sep">|</span>' +
            '<a href="mailto:wishnoblog@gmail.com">wishnoblog@gmail.com</a>' +
            '<span class="attr-sep">|</span>' +
            '<a href="https://blog.wishstudio.net" target="_blank" rel="noopener">blog.wishstudio.net</a>';

        content.insertBefore(banner, content.firstChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertBanner);
    } else {
        insertBanner();
    }

    // mdBook SPA navigation — re-insert on page change
    document.addEventListener('click', function () {
        setTimeout(insertBanner, 100);
    });
})();
