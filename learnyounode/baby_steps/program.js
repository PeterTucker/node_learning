
var argsum = 0

for(i = 0;i<process.argv.length;i++){
	if(i>1){
		argsum += Number(process.argv[i])
	}
}

console.log(argsum)
