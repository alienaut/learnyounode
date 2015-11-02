var net = require('net');

var port = process.argv[2];

var digitFormatter = function(number) {
	if(number < 10) {
		return "0" + number;
	} else {
		return number;
	}
}

var server = net.createServer(function (socket) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours()
  var minutes = date.getMinutes()

  var date = year + "-" + digitFormatter(month) + "-" + digitFormatter(day) + " " 
  	+ digitFormatter(hours) + ":" + digitFormatter(minutes) + "\n";

  socket.end(date);
});

server.listen(port);
