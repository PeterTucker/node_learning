var fs = require('fs')

function read_lines(file, callback){
	fs.readFile(file, function doneReading(err, fileContents){
		var lines = fileContents.toString().split('\n').length - 1;
		callback(lines);		
	})
}

function print_lines(lines){
	console.log(lines);
}

read_lines(process.argv[2], print_lines);

