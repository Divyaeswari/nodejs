//How to get the input from the user
//readline method using for this. its builtin method
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin,output:process.stdout});
rl.question('What is your Name?',function(name){
	rl.question('where do you live?',function(Country){
		console.log(`${name}, is a citizen of ${Country}`);
		rl.close();
	});
});
rl.on('close',function(){
	console.log('\n Bye See You!');
	process.exit(0);
});