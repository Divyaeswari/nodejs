const prompt = require('prompt');
const properties = [{name: 'username',validator:/^[a-zA-Z\s-]+$/,warning:'Username must be only letters spaces or dashes'},{name:'password'}];
prompt.start();
prompt.get(properties,function(err,result){
	if(err)
	{
		return onErr(err);
	}
	console.log('Command line Input Received');
	console.log('Username: '+result.username);
	console.log('password: '+result.password);
});
function onErr(err){
	console.log(err);
	return 1;
}