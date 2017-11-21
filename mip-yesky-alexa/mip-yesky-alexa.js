/**
* 下载站mip改造
* @file 下载alexa统计
* @author 576604471@qq.com
* @version 1.0.0
*/
define(function (require) {
    var customElem = require('customElement').create();
    customElem.prototype.build = function () {
        _atrk_opts = {atrk_acct: 'RiEjm1akKd606C', domain: 'yesky.com', dynamic: true};
        (function () {
            var as = document.createElement('script');
            as.type = 'text/javascript';
            as.async = true;
            as.src = 'https://d31qbv1cthcecs.cloudfront.net/atrk.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(as, s);
        })();
    };
    return customElem;
});
