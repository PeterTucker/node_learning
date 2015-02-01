var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])
var data = buf.toString();
var count = data.split('\n').length
//console.log(data)
console.log(count - 1)
