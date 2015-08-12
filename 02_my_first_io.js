var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var lines_count = str.split(/\r\n|\r|\n/).length - 1;

console.log(lines_count);
