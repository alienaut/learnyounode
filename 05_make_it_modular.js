var filtered_ls = require('./filtered_ls');

filtered_ls(process.argv[2], process.argv[3], function(err, data){
	for(var i = 0, l = data.length; i < l; i++) {
		console.log(data[i]);
	}
});
