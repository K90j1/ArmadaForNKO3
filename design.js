/**
 * Package Armada for NKO 3
 * Date: 11/10/12
 * Time: 10:06 AM
 * Licensed under the MIT licenses.
 * Copyright 2012 Coronet Internet Service
 * URL: http://blog.coronet-internet.com
 * todo closure, for-in
 */

/**
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * 1) representation html elements
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * @return void
 */
function readyElements() {
    var wrapperDiv = document.createElement('div');
    wrapperDiv.id = 'wrapper';
    document.body.appendChild(wrapperDiv);

    var sideBoxDiv = document.createElement('div');
    sideBoxDiv.id = 'sideBox';
    jQuery('div#wrapper').append(sideBoxDiv);

    var titleH1 = document.createElement('h1');
    titleH1.id = 'title';
    jQuery('div#sideBox').append(titleH1);

    var descriptionP = document.createElement('p');
    descriptionP.id = 'description';
    jQuery('div#sideBox').append(descriptionP);

    var copyP = document.createElement('p');
    copyP.id = 'copy';
    jQuery('div#sideBox').append(copyP);

    jQuery('#description').html('Atabaque - left<br>Berimbau - up<br>Atabaque- right');
    jQuery('#title').html('WE WILL CAPO<br>EIRA YOU');
    jQuery('#copy').html('© TEAM Coronet Internet Service.');

    jQuery('body').css({
        'padding':'0px',
        'margin':'0px',
        'background-color':'#111'
    });
    jQuery('div#wrapper').css({
        'min-height':windowHeight,
        'width':jQuery(window).width(),
        'display':'block',
        'margin':'0 auto',
        'background-color':'#111',
        'overflow':'auto',
        'height':'100%'
    });
    jQuery('div#sideBox').css({
        'width':'185px',
        'float':'left',
        'height':windowHeight,
        'margin-right':'10px',
        'background-color':'#1a1a1a',
        'border-right':'1px solid rgba(0,0,0,.5)',
        '-webkit-box-shadow':'1px 1px 2px rgba(255,255,255,.1)',
        '-moz-box-shadow':'1px 1px 2px rgba(255,255,255,.1)',
        'padding':'0 10px 0 8px',
        'z-index':'-1',
        'white-space':'pre',
        'white-space':'pre-line'
    });

    jQuery('#description').css({
        'font-size':'18px',
        'text-shadow':'1px 1px 0px #111'
    });
    jQuery('#title').css({
        'text-shadow':'1px 1px 0px #111',
        'font-size':'62px',
        'font-family':'serif',
        'display':'inline-block',
        'margin-right':'10px',
        'width':windowHeight / 2 * 0.631,
        'position':'relative',
        'float':'left',
        'line-height':'0.9em'
    });
    jQuery('#copy').css({
        'font-size':'10px',
        'text-shadow':'1px 1px 0px #111',
        'color':'#333',
        'position':'absolute',
        'bottom':'0px',
        'left':'10px',
        'width':'180px'
    });

    jQuery(document).keydown(function (e) {
        console.log(e.keyCode);
        socket.emit('keydown', e.keyCode);
    });
}
/**
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * 2) refresh and representation div elements
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * @param playerNum {int} Number of connection.
 * @return void
 */
function readySceneElements(playerNum) {
    /* refresh */
	jQuery('div[class ^= \'scene\']').remove();

	var i, revNum, divNum = 1;
	switch (playerNum) {
		case 1:
			revNum = 3;
			btnAreaDiv = new Array(revNum);
			for (i = 1; i < revNum; i++) {
				btnAreaDiv[i] = document.createElement('div');
				btnAreaDiv[i].id = 'btnArea' + i;
				btnAreaDiv[i].className = 'scene' + playerNum;

				if (i % 2 == 0 && i != revNum) {
					btnAreaDiv[i].appendChild(canvasBtn(i + 1));
				} else if (i % 2 != 0 && i != revNum) {
					btnAreaDiv[i].appendChild(canvasBtn(i));
					btnAreaDiv[i].appendChild(canvasBtn(i + 1));
				}
				jQuery('div#wrapper').append(btnAreaDiv[i]);
			}
			break;
		case 2:
			revNum = 7;
			btnAreaDiv = new Array(revNum);
			for (i = 1; i < revNum; i++) {
				jQuery('#btnArea0' + i).remove();
				btnAreaDiv[i] = document.createElement('div');
				btnAreaDiv[i].id = 'btnArea' + i;
				btnAreaDiv[i].className = 'scene' + playerNum;
				if (i % 3 == 0 && i != revNum) {
					divNum++;
					btnAreaDiv[divNum].appendChild(canvasBtn(i));
					divNum++;
				} else if (i % 3 !== 0 && i !== revNum) {
					btnAreaDiv[divNum].appendChild(canvasBtn(i));
				}
				jQuery('div#wrapper').append(btnAreaDiv[i]);
			}
			break;
		case 3:
			windowHeight = windowHeight * 0.7;
			revNum = 10;
			btnAreaDiv = new Array(revNum);
			for (i = 1; i < revNum; i++) {
				jQuery('#btnArea0' + i).remove();
				btnAreaDiv[i] = document.createElement('div');
				btnAreaDiv[i].id = 'btnArea' + i;
				btnAreaDiv[i].className = 'scene' + playerNum;
				if (i % 3 == 0 && i != revNum) {
					divNum++;
					btnAreaDiv[divNum].appendChild(canvasBtn(i));
					divNum++;
				} else if (i % 3 !== 0 && i !== revNum) {
					btnAreaDiv[divNum].appendChild(canvasBtn(i));
				}
				jQuery('div#wrapper').append(btnAreaDiv[i]);
			}
			break;
		case 4:
			windowHeight = windowHeight * 0.6;
			revNum = 13;
			var btnAreaDiv = new Array(revNum);
			for (i = 1; i < revNum; i++) {
				jQuery('#btnArea0' + i).remove();
				btnAreaDiv[i] = document.createElement('div');
				btnAreaDiv[i].id = 'btnArea' + i;
				btnAreaDiv[i].className = 'scene' + playerNum;
				if (i % 3 == 0 && i != revNum) {
					divNum++;
					btnAreaDiv[divNum].appendChild(canvasBtn(i));
					divNum++;
				} else if (i % 3 !== 0 && i !== revNum) {
					btnAreaDiv[divNum].appendChild(canvasBtn(i));
				}
				jQuery('div#wrapper').append(btnAreaDiv[i]);
			}
			break;
        case 5:
            windowHeight = windowHeight * 0.6;
            revNum = 13;
            var btnAreaDiv = new Array(revNum);
            for (i = 1; i < revNum; i++) {
                jQuery('#btnArea0' + i).remove();
                btnAreaDiv[i] = document.createElement('div');
                btnAreaDiv[i].id = 'btnArea' + i;
                btnAreaDiv[i].className = 'scene' + playerNum;
                if (i % 3 == 0 && i != revNum) {
                    divNum++;
                    btnAreaDiv[divNum].appendChild(canvasBtn(i));
                    divNum++;
                } else if (i % 3 !== 0 && i !== revNum) {
                    btnAreaDiv[divNum].appendChild(canvasBtn(i));
                }
                jQuery('div#wrapper').append(btnAreaDiv[i]);
            }
            break;
        case 6:
            windowHeight = windowHeight * 0.6;
            revNum = 13;
            var btnAreaDiv = new Array(revNum);
            for (i = 1; i < revNum; i++) {
                jQuery('#btnArea0' + i).remove();
                btnAreaDiv[i] = document.createElement('div');
                btnAreaDiv[i].id = 'btnArea' + i;
                btnAreaDiv[i].className = 'scene' + playerNum;
                if (i % 3 == 0 && i != revNum) {
                    divNum++;
                    btnAreaDiv[divNum].appendChild(canvasBtn(i));
                    divNum++;
                } else if (i % 3 !== 0 && i !== revNum) {
                    btnAreaDiv[divNum].appendChild(canvasBtn(i));
                }
                jQuery('div#wrapper').append(btnAreaDiv[i]);
            }
            break;
	}
}


/**
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * 3) create canvas element
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * @param size{int} Pattern of size.
 * @return canvasBtn {obj} canvas element
 */
function canvasBtn(size) {
    var canvasBtn, contextBtn;
    canvasBtn = document.createElement('canvas');
    canvasBtn.width = cubeWidth()
    canvasBtn.height = cubeHeight(size)
    canvasBtn.id = 'se' + size;
    canvasBtn.addEventListener('click', function (event) {
        canvasOnClick(event, size);
    }, false);
    contextBtn = canvasBtn.getContext('2d');
    contextBtn.beginPath();
    contextBtn.fillStyle = randomRGB();
    contextBtn.fillRect(
        horizontal(),
        vertical(),
        cubeWidth(),
        cubeHeight(size)
    );
    return canvasBtn;
}

/**
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * 4) decision click area
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * @param event{obj} click event.
 * @param num{int} canvas id.
 * @return void
 */
function canvasOnClick(event, num) {
    var targetId, targetSe, cell, horizontal, vertical, cubeHeight, cubeWidth;

    targetId = '#se' + num;
    targetSe = 'se' + num;
    cell = getCursorPosition(event);
    horizontal = jQuery(targetId).offset().left;
    vertical = jQuery(targetId).offset().top;
    cubeHeight = jQuery(targetId).height();
    cubeWidth = jQuery(targetId).width();

//	console.log('cell.horizontal ' + cell.horizontal);
//	console.log('cell.vertical ' + cell.vertical);
//	console.log('horizontal ' + horizontal);
//	console.log('vertical ' + vertical);
    if (cell.horizontal > horizontal &&
        cell.horizontal < horizontal + cubeWidth &&
        cell.vertical > vertical &&
        cell.vertical < vertical + cubeHeight
        ) {
        socket.emit('soundEffect', { effect:targetSe});
    }
}

/**
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * 5) add css property
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * @return void
 * */
function designElements() {
	jQuery('canvas').css({
		'margin':'0px 0px 9px 0',
		'padding':'0px',
		'display':'none'
	});

	jQuery('div[class ^= \'scene\']').css({
		'display':'inline-block',
		'margin-right':'10px',
		'width':windowHeight / 2 * 0.631,
		'position':'relative',
		'float':'left'
	});
}

/**
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * 7) toggle div elements
 * ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 * @param current {int} Counting canvas.
 * @param maxNum {int} Number of connection multiplied by 3.
 * @return void
 * */
function reflexiveToggle(current, maxNum) {
    if (current !== maxNum) {
        current++;
        var targetId = 'canvas#se' + current;
        jQuery(targetId).toggle('fast', function () {
            reflexiveToggle(current, maxNum);
        });
    }
}

function randomRGB() {
	var red = Math.ceil(Math.random() * 255);
	var green = Math.ceil(Math.random() * 255);
	var blue = Math.ceil(Math.random() * 255);
	return  'rgba(' + red + ',' + green + ',' + blue + ', 1)';
}

function horizontal(number) {
	switch (number) {
		default :
			return 0;
	}
}
function vertical(number) {
	switch (number) {
		default :
			return 0;
	}
}
function cubeWidth(number) {
	switch (number) {
		default :
			return windowHeight / 2 * 0.631;
	}

}
function cubeHeight(number) {
	if (number % 3 == 0) {
		return windowHeight + 10;
	} else {
		return windowHeight / 2;
	}
}
