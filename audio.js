/**
 * Created with JetBrains WebStorm.
 * User: bookair
 * Date: 11/10/12
 * Time: 10:06 AM
 * To change this template use File | Settings | File Templates.
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
    'se4':new Audio('sound/se4.' + extension()),
    'se5':new Audio('sound/se5.' + extension()),
    'se6':new Audio('sound/se6.' + extension())
};

