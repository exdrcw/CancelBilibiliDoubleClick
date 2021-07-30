// ==UserScript==
// @name         Bilibili取消双击全屏
// @namespace    https://github.com/exdrcw/CancelBilibiliDoubleClick
// @version      0.2
// @description  取消双击全屏及鼠标暂停的延迟
// @author       Drcw
// @require      https://cdn.staticfile.org/jquery/1.8.3/jquery.min.js
// @include      *://www.bilibili.com/video/BV*
// @include      *://www.bilibili.com/bangumi/play/ep*
// @include      *://www.bilibili.com/bangumi/play/ss*
// @include      *://m.bilibili.com/bangumi/play/ep*
// @include      *://m.bilibili.com/bangumi/play/ss*
// @include      *://bangumi.bilibili.com/anime/*
// @include      *://bangumi.bilibili.com/movie/*
// @include      *://www.bilibili.com/bangumi/media/md*
// @include      *://www.bilibili.com/blackboard/html5player.html*
// @include      *://www.bilibili.com/watchroom/*
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @grant        none
// ==/UserScript==


(function() {

    'use strict';

    function myFunction(){
    var a = $("div.bilibili-player-dm-tip-wrap")
    a.remove();
    }
    function myFunction2(){
    var a = $("div.bilibili-player-dm-tip-wrap")
    if(a.length)
    a.remove();
    }

    jQuery.fn.wait = function (func, times, interval) {
    var _times = times || -1,
        _interval = interval || 500,
        _self = this,
        _selector = this.selector, //选择器
        _iIntervalID; //定时器id
    if( this.length ){ //如果已经获取到了，就直接执行函数
        func && func.call(this);
    } else {
        _iIntervalID = setInterval(function() {
            if(!_times) { //是0就退出
                clearInterval(_iIntervalID);
            }
            _times <= 0 || _times--; //如果是正数就 --
            _self = $(_selector); //再次选择
            if( _self.length ) { //判断是否取到
                func && func.call(_self);
                clearInterval(_iIntervalID);
            }
        }, _interval);
    }
    return this;
}

setInterval(myFunction2,500);

}
)();
