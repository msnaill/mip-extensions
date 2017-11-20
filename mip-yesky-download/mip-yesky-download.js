/**
* 星座屋mip改造 javascript功能插件
* @file 页面主要内容改造
* @author mipxzw@163.com
* @version 1.0.0
*/
define(function (require) {
    var $ = require('jquery');
    var customElem = require('customElement').create();
    customElem.prototype.build = function () {
        var ar = document.createElement('script');
        ar.src = 'http://m.yesky.com/TLimages2009/yesky/js/jQuery.md5.js';
        ar.type = 'text/javascript';
        document.body.appendChild(ar);
        ar.onload = function () {
            $("mip-myesky-down").find('.down').click(function () {
                var filepath = $(this).attr("data-url");
                var hexTime = new Number(Math.floor(new Date().getTime() / 1000)).toString(16);
                var md5 = jQuery.md5("yesky_download" + filepath + hexTime);
                var newlink = "http://cdn1.mydown.yesky.com/" + hexTime + "/" + md5 + filepath;
                $(this).attr('href',newlink);
            });
        }
    };
    return customElem;
});
