/**
 * jquery的自定义扩展
 * @authors 清泉古雾(徐永全) (xuyq1112@gmail.com)
 * @date    2014-05-01 18:05:57
 * @version 1.0.0
 */

define('core/extra/jquery', function(require, exports, module) {

    var $ = require('core/jquery/jquery');

    var console = window.console;

    //ie7 console.log是一个对象
    var enableLog = console && typeof console.log === 'function';

    $.log = function() {
        if (enableLog) {
            console.log.apply(console, arguments);
        }
    };

    // $.extend($, {
    //     log: function() {
    //         if (enableLog) {
    //             console.log.apply(console, arguments);
    //         }
    //     }
    // });

    // $.extend($.fn, {
    //     scrollLeft: function() {
    //         if (!this.length) return;
    //         return ('scrollLeft' in this[0]) ? this[0].scrollLeft : this[0].scrollX;
    //     }
    // });

});