var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, files) {
	if(!err){
		var filteredList = files.filter(function(file) {
			return path.extname(file).slice(1) === process.argv[3];
		});

		for(var i = 0, l = filteredList.length; i < l; i++) {
			console.log(filteredList[i]);
		} 		
	}
});
