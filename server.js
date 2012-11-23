var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs')
    , url = require('url')

app.listen(3000);
var count = 0;

function readSoundFile(requestString, extension){
	if(requestString.search('bgm') > 0){
//		console.log('requestString' + requestString);
		var readBgm = '.' + requestString;
		return fs.readFileSync(readBgm);
	}
	var targetNum = requestString.match(/[0-9]+/g);
//	console.log('reday targetNum ' + targetNum);
	if(targetNum > 3){
		var subtraction = Math.floor(targetNum / 3) * 3;
//		console.log('subtraction ' + subtraction);
		targetNum = targetNum - subtraction;
	}
	if(targetNum === 0){
		targetNum = 3;
	}
//	console.log('targetNum ' + targetNum);
	var readFile = './sound/se' + targetNum + '.' + extension;
	console.log('readFile ' + readFile);
	return fs.readFileSync(readFile);
}

function handler(req, res) {
    var request = url.parse(req.url, true);
	if(request.pathname.search('sound') > 0){
		var extension;
		if(request.pathname.search('ogg')){
			extension = 'ogg';
		}else if(request.pathname.search('mp3')){
			extension = 'mp3';
		}else if(request.pathname.search('wav')){
			extension = 'wav';
		}
		var readFile = readSoundFile(request.pathname,extension);
		res.writeHead(200, {'Content-Type':'audio/' +  extension});
		res.end(readFile, 'binary');
	}
    switch (request.pathname) {
        case  '/':
            fs.readFile(__dirname + '/first.html',
                function (err, data) {
                    if (err) {
                        res.writeHead(500);
                        return res.end('Error loading index.html');
                    }
                    res.writeHead(200);
                    res.end(data);
                });
            break;
        case  '/index.html':
            fs.readFile(__dirname + '/first.html',
                function (err, data) {
                    if (err) {
                        res.writeHead(500);
                        return res.end('Error loading index.html');
                    }
                    res.writeHead(200);
                    res.end(data);
                });
            break;
        case  '/index2.html':
            fs.readFile(__dirname + '/index2.html',
                function (err, data) {
                    if (err) {
                        res.writeHead(500);
                        return res.end('Error loading index2.html');
                    }
                    res.writeHead(200);
                    res.end(data);
                });
            break;
        case '/design.js':
            var designJs = fs.readFileSync('./design.js');
            res.writeHead(200, {'Content-Type':'application/x-javascript' });
            res.end(designJs, 'utf8');
            break;
        case '/audio.js':
            var audioJs = fs.readFileSync('./audio.js');
            res.writeHead(200, {'Content-Type':'application/x-javascript' });
            res.end(audioJs, 'utf8');
            break;
        case '/click.js':
            var clickJs = fs.readFileSync('./click.js');
            res.writeHead(200, {'Content-Type':'application/x-javascript' });
            res.end(clickJs, 'utf8');
            break;
    }

}

/* ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
 // sockets action
 ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・ */
io.sockets.on('connection', function (socket) {
	socket.emit('connection', { screen:'start'});
    count++;
    socket.emit('refreshScreen', { playerNum:count});
    socket.broadcast.emit('refreshScreen', { playerNum:count});

    socket.on('soundEffect', function (data) {
        socket.emit('resSoundEffect', data);
        socket.broadcast.emit('resSoundEffect', data);
    });

    socket.on('keydown', function (code) {
//        console.log(code);
        switch (code) {
            case 37 :
                socket.emit('resSoundEffect', { effect:'se01' });
                socket.broadcast.emit('resSoundEffect', { effect:'se01' });
                socket.emit('resSoundEffect', { effect:'se04' });
                socket.broadcast.emit('resSoundEffect', { effect:'se04' });
                break;
            case 38 :
                socket.emit('resSoundEffect', { effect:'se03' });
                socket.broadcast.emit('resSoundEffect', { effect:'se03' });
                socket.emit('resSoundEffect', { effect:'se06' });
                socket.broadcast.emit('resSoundEffect', { effect:'se06' });
                break;
            case 39 :
                socket.emit('resSoundEffect', { effect:'se02' });
                socket.broadcast.emit('resSoundEffect', { effect:'se02' });
                socket.emit('resSoundEffect', { effect:'se05' });
                socket.broadcast.emit('resSoundEffect', { effect:'se05' });
                break;
            default :
                break;         canvasOnClick
        }
    });

    socket.on('disconnect', function () {
	    count = count-1;
//        logging(socket.id);
    });
//    logging(socket.id);
});



function logging(socketId) {
    var now = Math.round(new Date().getTime() / 1000);
    var http = require('http');
    var logApi = http.get(
        {
            'host':'coronet-internet.com',
            'port':80,
            'path':'/hackathone/' + socketId + '/' + now + '/log.html'
        },
        function (res) {
        }
    );
    logApi.on('error', function (e) {
//        console.log(e);
    })
}