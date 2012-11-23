/**
 * Created with JetBrains WebStorm.
 * User: bookair
 * Date: 11/10/12
 * Time: 10:06 AM
 * To change this template use File | Settings | File Templates.
 * todo http://cou929.nu/data/google_javascript_style_guide/
 */

function readySceneElements(playerNum) {
	"use strict";
	var i, revNum, divNum = 1;
	switch (playerNum) {
		case 1:
			revNum = 3;
			var btnAreaDiv = new Array(revNum);
			for(i = 1; i < revNum; i++){
				btnAreaDiv[i]  = document.createElement('div');
				btnAreaDiv[i].id = 'btnArea' + i;
				btnAreaDiv[i].className = 'scene' + playerNum;

				if(i % 2 == 0 && i != revNum){
					btnAreaDiv[i].appendChild(canvasBtn(i+1));
				}else if (i % 2 != 0 && i != revNum){
					btnAreaDiv[i].appendChild(canvasBtn(i));
					btnAreaDiv[i].appendChild(canvasBtn(i+1));
				}
				jQuery('div#wrapper').append(btnAreaDiv[i]);
			}
			break;
		case 2:
			revNum = 7;
			var btnAreaDiv = new Array(revNum);
			for(i = 1; i < revNum; i++){
				jQuery('#btnArea0'+i).remove();
				btnAreaDiv[i]  = document.createElement('div');
				btnAreaDiv[i].id = 'btnArea' + i;
				btnAreaDiv[i].className = 'scene' + playerNum;
				if(i % 3 == 0 && i != revNum){
					divNum++;
					btnAreaDiv[divNum].appendChild(canvasBtn(i));
					divNum++;
				}else if (i % 3 !== 0 && i !== revNum){
					btnAreaDiv[divNum].appendChild(canvasBtn(i));
				}
				jQuery('div#wrapper').append(btnAreaDiv[i]);
			}
			break;
		case 3:
			windowHeight = windowHeight * 0.7;
			revNum = 10;
			var btnAreaDiv = new Array(revNum);
			for(i = 1; i < revNum; i++){
				jQuery('#btnArea0'+i).remove();
				btnAreaDiv[i]  = document.createElement('div');
				btnAreaDiv[i].id = 'btnArea' + i;
				btnAreaDiv[i].className = 'scene' + playerNum;
				if(i % 3 == 0 && i != revNum){
					divNum++;
					btnAreaDiv[divNum].appendChild(canvasBtn(i));
					divNum++;
				}else if (i % 3 !== 0 && i !== revNum){
					btnAreaDiv[divNum].appendChild(canvasBtn(i));
				}
				jQuery('div#wrapper').append(btnAreaDiv[i]);
			}
			break;
	}
}


// todo  http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1165986241
function designElements() {
	jQuery('canvas').css({
		'margin':'0px 0px 9px 0',
		'padding':'0px',
		'display':'none'
	});
	jQuery('.scene1').css({
		'display':'inline-block',
		'margin-right':'10px',
		'width':windowHeight / 2 * 0.631,
		'position':'relative',
		'float':'left'
	});
	jQuery('.scene2').css({
		'display':'inline-block',
		'margin-right':'10px',
		'width':windowHeight / 2 * 0.631,
		'position':'relative',
		'float':'left'
	});
	jQuery('.scene3').css({
		'display':'inline-block',
		'margin-right':'10px',
		'width':windowHeight / 2 * 0.631,
		'position':'relative',
		'float':'left'
	});
}

// todo  if player 3
function canvasBtn(size) {
//	console.log(size);
//	console.log(cubeHeight(size));
	var canvasBtn = '';
	var contextBtn = '';
	var i;
//	for (i = 1; i < size; i++){
	canvasBtn = document.createElement('canvas');
	canvasBtn.width = cubeWidth()
	canvasBtn.height = cubeHeight(size)
	canvasBtn.id = 'se'+size;
	var eventListener = 'canvasOnClick0' + size;
	canvasBtn.addEventListener('click', eventListener, false);
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

// todo fix click to sound
function canvasOnClick01(e) {
	var cell = getCursorPosition(e);
	if (cell.horizontal > horizontal(1) + 185 &&
		cell.horizontal < horizontal(1) + cubeWidth() + 185 &&
		cell.vertical > vertical(1) &&
		cell.vertical < vertical(1) + cubeHeight(1)
		) {
		socket.emit('soundEffect', { effect:'se1' });
	}
}

function canvasOnClick02(e) {
	var cell = getCursorPosition(e);

	if (cell.horizontal > horizontal(2) + 185 &&
		cell.horizontal < horizontal(2) + cubeWidth() + 185 &&
		cell.vertical > vertical(2) &&
		cell.vertical < vertical(2) + cubeHeight(1)
		) {
		socket.emit('soundEffect', { effect:'se2' });
	}
}

function canvasOnClick03(e) {
	var cell = getCursorPosition(e);
	if (cell.horizontal > horizontal(3) + 185 &&
		cell.horizontal < horizontal(3) + cubeWidth() + 185 &&
		cell.vertical > vertical(3) &&
		cell.vertical < vertical(3) + cubeHeight(2)
		) {

		socket.emit('soundEffect', { effect:'se3' });
	}
}


function canvasOnClick04(e) {
	var cell = getCursorPosition(e);

	if (cell.horizontal > horizontal(4) + 185 + 40 &&
		cell.horizontal < horizontal(4) + cubeWidth() + 185 + 40 &&
		cell.vertical > vertical() &&
		cell.vertical < vertical() + cubeHeight()
		) {
		socket.emit('soundEffect', { effect:'se4' });
	}
}

function canvasOnClick05(e) {
	var cell = getCursorPosition(e);
//	console.log(cell.horizontal);
//	console.log(cell.vertical);
//	console.log('-------------')
//	console.log(horizontal(4) + 185 + 40 );
//	console.log(horizontal(4) + cubeWidth() + 185 + 40);
//	console.log(vertical(2));
//	console.log(vertical(2) + cubeHeight(1));

	if (cell.horizontal > horizontal(4) + 185 + 40 &&
		cell.horizontal < horizontal(4) + cubeWidth() + 185 + 40 &&
		cell.vertical > vertical(2) &&
		cell.vertical < vertical(2) + cubeHeight()
		) {
		socket.emit('soundEffect', { effect:'se5' });
	}
}

function canvasOnClick06(e) {
	var cell = getCursorPosition(e);
	if (cell.horizontal > horizontal(5) + 185 + 40 &&
		cell.horizontal < horizontal(5) + cubeWidth() + 185 + 40 &&
		cell.vertical > vertical(3) &&
		cell.vertical < vertical(3) + cubeHeight(2)
		) {

		socket.emit('soundEffect', { effect:'se6' });
	}
}

function canvasOnClick07(e) {
	var cell = getCursorPosition(e);
	if (cell.horizontal > horizontal(5) + 185 + 40 &&
		cell.horizontal < horizontal(5) + cubeWidth() + 185 + 40 &&
		cell.vertical > vertical(3) &&
		cell.vertical < vertical(3) + cubeHeight(2)
		) {

		socket.emit('soundEffect', { effect:'se7' });
	}
}

function canvasOnClick08(e) {
	var cell = getCursorPosition(e);
	if (cell.horizontal > horizontal(5) + 185 + 40 &&
		cell.horizontal < horizontal(5) + cubeWidth() + 185 + 40 &&
		cell.vertical > vertical(3) &&
		cell.vertical < vertical(3) + cubeHeight(2)
		) {

		socket.emit('soundEffect', { effect:'se8' });
	}
}

function canvasOnClick09(e) {
	var cell = getCursorPosition(e);
	if (cell.horizontal > horizontal(5) + 185 + 40 &&
		cell.horizontal < horizontal(5) + cubeWidth() + 185 + 40 &&
		cell.vertical > vertical(3) &&
		cell.vertical < vertical(3) + cubeHeight(2)
		) {

		socket.emit('soundEffect', { effect:'se9' });
	}
}

function canvasOnClick10(e) {
	var cell = getCursorPosition(e);
	if (cell.horizontal > horizontal(5) + 185 + 40 &&
		cell.horizontal < horizontal(5) + cubeWidth() + 185 + 40 &&
		cell.vertical > vertical(3) &&
		cell.vertical < vertical(3) + cubeHeight(2)
		) {

		socket.emit('soundEffect', { effect:'se10' });
	}
}

function canvasOnClick11(e) {
	var cell = getCursorPosition(e);
	if (cell.horizontal > horizontal(5) + 185 + 40 &&
		cell.horizontal < horizontal(5) + cubeWidth() + 185 + 40 &&
		cell.vertical > vertical(3) &&
		cell.vertical < vertical(3) + cubeHeight(2)
		) {

		socket.emit('soundEffect', { effect:'se11' });
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
//		case 1:
//			return 0;
//		case 2:
//			return 0;
//		case 3:
//			return windowHeight / 2 * 0.631;
//		case 4:
//			return windowHeight / 2 * 0.631 * 2;
//		case 5:
//			return windowHeight / 2 * 0.631 * 3;
		default :
			return 0;
	}
}
function vertical(number) {
	switch (number) {
//		case 1:
//			return 0;
//		case 2:
//			return windowHeight / 2 * 0.631;
//		case 3:
//			return 0;
		default :
			return 0;
	}
}
function cubeWidth(number) {
	switch (number) {
//		case 1:
//			return windowHeight / 2 * 0.631;
//		case 2:
//			return windowHeight / 2 * 0.631;
//		case 3:
//			return windowHeight / 2 * 0.631;
		default :
			return windowHeight / 2 * 0.631;
	}

}
function cubeHeight(number) {
	if(number % 3 == 0){
		return windowHeight + 10;
	}else{
		return windowHeight / 2;
	}
//
//
//		switch (number) {
//		case 1:
//			return windowHeight / 2;
//		case 2:
//			return windowHeight + 10;
//		default :
//			return windowHeight;
//	}
}


/* ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 // Layout action:
 ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・ */
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

function reflexiveToggle(current, maxNum){
	if(current !== maxNum){
		current++;
		var targetId = 'canvas#se' + current;
//		console.log(targetId);
		jQuery(targetId).toggle('fast', function(){
			reflexiveToggle(current, maxNum);
		});

	}
}