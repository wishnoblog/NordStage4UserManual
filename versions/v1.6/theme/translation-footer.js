(function () {
    function insertTranslationFooter() {
        var main = document.querySelector('.content main');
        if (!main || main.querySelector('.translation-footer')) return;

        var footer = document.createElement('footer');
        footer.className = 'translation-footer';
        footer.setAttribute('aria-label', '翻譯資訊');
        footer.innerHTML =
            '<hr>' +
            '<p>翻譯：WiSH 隨筆<br>' +
            '部落格：<a href="https://blog.wishstudio.net" target="_blank" rel="noopener">https://blog.wishstudio.net</a><br>' +
            'Email：<a href="mailto:wishnoblog@gmail.com">wishnoblog@gmail.com</a></p>';

        main.appendChild(footer);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertTranslationFooter);
    } else {
        insertTranslationFooter();
    }
})();
