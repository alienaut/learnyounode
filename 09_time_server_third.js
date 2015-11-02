var net = require("net");
var strftime = require('strftime'); // npm install strftime

var port = process.argv[2];

var server = net.createServer(function (socket) { 
	var date = strftime('%Y-%m-%d %H:%M') + "\n";

	socket.end(date);
});

server.listen(port);
