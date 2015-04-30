var Messi = require('./messi');
var http = require('http');

http.createServer(function(req, res){
res.writeHead(200);// status code 200= ok
res.write(messi.printHtml());
res.end();
}).listen(8080);
console.log("listen to port 8080");

var messi = new Messi();

messi.on("awards",messi.showTrophies);
messi.on("awards",messi.showLoseOrWin);
messi.on("awards",messi.isBest);

messi.win(2);
messi.win(13);

messi.lose(1);
messi.lose(4);
messi.lose(19);

messi.win(101);
