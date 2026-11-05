(function () {
    function insertVersionSelector() {
        var main = document.querySelector('.content');
        if (!main || document.querySelector('.manual-version-selector')) return;
        var version = /OS 1\.4x/.test(document.title) ? '1.4' : '1.6';
        var currentPage = location.pathname.replace(/^\/v1\.[46]\//, '/').split('/').pop() || 'index.html';
        var nav = document.createElement('nav');
        nav.className = 'manual-version-selector';
        nav.setAttribute('aria-label', '說明書版本');
        nav.style.cssText = 'display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin:12px 0 18px;padding:10px 12px;border:1px solid var(--table-border-color,#888);border-radius:6px;font-size:14px';
        var label = document.createElement('label');
        label.htmlFor = 'manual-version';
        label.textContent = '說明書版本';
        var select = document.createElement('select');
        select.id = 'manual-version';
        select.style.cssText = 'padding:5px 8px;font:inherit;color:var(--fg);background:var(--bg);border:1px solid var(--table-border-color,#888);border-radius:4px';
        [['1.6', 'OS 1.6x（Edition N）'], ['1.4', 'OS 1.4x（Edition L）']].forEach(function (item) {
            var option = document.createElement('option');
            option.value = item[0]; option.textContent = item[1]; option.selected = item[0] === version;
            select.appendChild(option);
        });
        select.addEventListener('change', function () {
            var page = currentPage;
            if (select.value === '1.4' && page === 'version_changes.html') page = 'ch00_about_translation.html';
            location.assign('/v' + select.value + '/' + page);
        });
        var hint = document.createElement('span');
        hint.textContent = version === '1.6' ? '目前版本' : '保留參考版';
        nav.appendChild(label); nav.appendChild(select); nav.appendChild(hint);
        main.insertBefore(nav, main.firstChild);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', insertVersionSelector);
    else insertVersionSelector();
})();
