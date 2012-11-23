/**
 * Click action:
 * Created with JetBrains WebStorm.
 * User: bookair
 * Date: 11/10/12
 * Time: 10:06 AM
 * To change this template use File | Settings | File Templates.
 */


function clickMotion(effect) {
    var targetId = 'canvas#' + effect;
    jQuery(targetId).effect('bounce', {direction:'down', times:3}, 300);
}

function fade() {
//	console.log(jQuery('canvas#Btn').height());

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
