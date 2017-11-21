/**
* 下载站mip改造
* @file 下载天极统计
* @author 576604471@qq.com
* @version 1.0.0
*/
define(function (require) {
    var customElem = require('customElement').create();
    customElem.prototype.build = function () {
        var ar = document.createElement('script');
        ar.src = 'http://www.yesky.com/TLimages2009/yesky/js/counter/web-utils.js';
        ar.type = 'text/javascript';
        document.body.appendChild(ar);
        ar.onload = function () {
            initCookie();
            var re = new RegExp('.*/(\\d+)(_(\\d+))?\\.shtml', 'ig');
            var _aid = '-1';
            if (re.exec(document.location.href) != null) {
                _aid = RegExp.$1
            }
            sentParamter(_aid, '1');
        };
    };
    return customElem;
});
