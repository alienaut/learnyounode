var http = require('http');

var urls = process.argv;

function getWholeData(url_index) {
	// get first or nth url from arguments
	url_index = url_index || 2;

	var data_collection = [];

	http.get(urls[url_index], function(response) {
		response.setEncoding('utf8');
		response.on('data', function(data) {
			data_collection.push(data);
		});
		response.on('error', console.log);
		response.on('end', function() {
			var data_string = data_collection.join('');
			console.log(data_string);
			if(url_index < urls.length) {
				getWholeData(url_index + 1);
			}
		});
	});
}

getWholeData();
