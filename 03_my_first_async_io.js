var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data)	{
	if(!err) {
		line_count = data.split(/\r\n|\r|\n/).length - 1;
		console.log(line_count);
	}
});
