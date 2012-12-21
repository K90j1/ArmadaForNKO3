/**
 * Package Armada for NKO 3
 * Date: 11/10/12
 * Time: 10:06 AM
 * Licensed under the MIT licenses.
 * Copyright 2012 Coronet Internet Service
 * URL: http://blog.coronet-internet.com
 */

function clickMotion(effect) {
    var targetId = 'canvas#' + effect;
    console.log(targetId);
    jQuery(targetId).effect('bounce', {direction:'down', times:3}, 300);
}

/**
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * 6) add hover animation
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * @return void
 * */
function fade() {
    jQuery('canvas').hover(function () {
        jQuery(this).animate({
            opacity:.5
        }, {
            duration:'fast',
            queue:false,
            easing:'easeInOutBounce'
        })
    }, function () {
        jQuery(this).animate({
            opacity:1
        }, {
            duration:'fast',
            queue:false,
            easing:'easeInOutBounce'
        })
    });
}

function getCursorPosition(e) {
    var x;
    var y;
    if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
    }
    else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return {horizontal:x, vertical:y};
}
