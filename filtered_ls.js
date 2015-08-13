var fs = require('fs');
var path = require('path');

module.exports = function(folderPath, extension, callback) {
	fs.readdir(folderPath, function(err, files){
		if(err){ return callback(err); }
		
		var filteredList = files.filter(function(file) {
			return path.extname(file).slice(1) === extension;
		});

		return callback(null, filteredList);
	});
};
