/**
 * Package Armada for NKO 3
 * Date: 11/10/12
 * Time: 10:06 AM
 * Licensed under the MIT licenses.
 * Copyright 2012 Coronet Internet Service
 * URL: http://blog.coronet-internet.com
 * todo for iPhone, safari
 */

function extension() {
    var audio = new Audio();
    var ext = '';
    if (audio.canPlayType('audio/ogg') == 'maybe') {
        ext = 'ogg';
    }
    else if (audio.canPlayType('audio/mp3') == 'maybe') {
        ext = 'mp3';
    }
    else if (audio.canPlayType('audio/wav') == 'maybe') {
        ext = 'wav';
    }
    return ext;
}

var soundList = {
    'se1':new Audio('sound/se1.' + extension()),
    'se2':new Audio('sound/se2.' + extension()),
    'se3':new Audio('sound/se3.' + extension()),
    'se4':new Audio('sound/se1.' + extension()),
    'se5':new Audio('sound/se2.' + extension()),
    'se6':new Audio('sound/se3.' + extension()),
    'se7':new Audio('sound/se1.' + extension()),
    'se8':new Audio('sound/se2.' + extension()),
    'se9':new Audio('sound/se3.' + extension()),
    'se10':new Audio('sound/se1.' + extension()),
    'se11':new Audio('sound/se2.' + extension()),
    'se12':new Audio('sound/se3.' + extension())
};

