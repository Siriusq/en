var _prevOnload = window.onload;

window.onload = function() {
    var switchLang = document.getElementsByClassName("menu-item menu-item-switch-to-chinese")[0];
    switchLang.onclick = function() {
        var href = window.location.href;
        var indexOfEn = herf.indexOf('/en/');
        if(indexOfEn !== -1) {
            window.location.href = href.replace('/en/', '/');
        }
        if(typeof(_prevOnload) === 'function') {
            _prevOnload();
        }
        return false;
    }
}