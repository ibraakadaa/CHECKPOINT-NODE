var fileName = process.argv[2];
var fs = require('fs');

var nbLines = null;
try {
	nbLines = fs.readFileSync(fileName, 'utf8').split('\n').length -1

	
	console.log(nbLines);
}
catch (e) {
	console.log(e);
}