// don't forget to
// $ npm install bl

var http = require('http');
var bl = require('bl');

url = process.argv[2];

http.get(url, function(response) {
	response.pipe(bl(function(err, data) {
		if(err) { throw err; }
		var str = data.toString();
		console.log(str.length);
		console.log(str);
	}));
});
