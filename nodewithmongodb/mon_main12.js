//Need use prompt to get user input, install prompt
//command: npm install prompt
const prompt = require('prompt');
prompt.start();
prompt.get(['username','email'],function(err,result){
	if(err){
		return onErr(err);
	}
	console.log('Command Line Input Received');

if(result.username=='Divya' && result.email=='divya@gmail.com')
{
	console.log('Valid User');
	console.log('UserName: '+result.username);
	console.log('Email: '+result.email);
}
else
{
	console.log('Invalid user');
}

});
function onErr(err){
	console.log(err);
	return 1;
}