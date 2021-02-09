(function () {
    if (typeof VConsole !== 'undefined') {
        window.vConsole = new VConsole();
    }

    var splash = document.getElementById('splash');
    splash.style.display = 'block';

    var cocos2d = document.createElement('script');
    cocos2d.async = true;
    cocos2d.src = 'https://cdn.jsdelivr.net/gh/yuewuzhijian/make_big_watermelon/js/cocos2d.min.js';

    var engineLoaded = function () {
        document.body.removeChild(cocos2d);
        cocos2d.removeEventListener('load', engineLoaded, false);
        window.boot();
    };
    cocos2d.addEventListener('load', engineLoaded, false);
    document.body.appendChild(cocos2d);
})();