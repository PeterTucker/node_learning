var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], process_list);

function process_list(err, list){
	for( i = 0; i<list.length;i++){
		
		if(path.extname(list[i])=='.md'){
			console.log(list[i]);
		}
	}
}

