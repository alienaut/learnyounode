var http = require('http');

var url = process.argv[2];
var data_collection = [];

http.get(url, function(response) {
	response.setEncoding('utf8');
	response.on('data', function(data) {
		data_collection.push(data);
	});
	response.on('error', console.log);
	response.on('end', function() {
		var data_string = data_collection.join('');
		console.log(data_string.length);
		console.log(data_string);
	});
});
