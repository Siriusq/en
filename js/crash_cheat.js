var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        var icon = document.querySelector('[rel="icon"]');
        icon.setAttribute('href', "/images/crashed.png");
        document.title = '╭(°A°`)╮ Aw, Crashed!';
        clearTimeout(titleTime);
    } else {
        var icon = document.querySelector('[rel="icon"]');
        icon.setAttribute('href', "/images/favicon.png");
        document.title = '(ฅ>ω<*ฅ) You got tricked!' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});