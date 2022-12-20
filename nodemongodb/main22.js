var mysql = require('mysql');
var prompt = require('prompt');
var conn = mysql.createConnection({host:"127.0.0.1",user:"root",password:"root",database:"nodedb"});
conn.connect(function(err){
	if(err){
		throw err;
	}
	console.log('Connected');
	console.log('Insert: Type 1');
	console.log('Select: Type 2');
	console.log('Update: Type 3');
	console.log('Delete: Type 4');

	
	num = parseInt(prompt("Enter Number"));
	if(num==1)
	{
	prompt.start();
	prompt.get(['username','password'],function(err,result){
		if(err){
			return onErr(err);
		}

		var sql = "insert into node_logintable values(username,password)";
		conn.query(sql,function(err,result){
			if(err)
			{
				throw err;
			}
			console.log('Record is Inserted');
			console.log(result.affectedRows);
		});
	});
	function onErr(err){
		console.log(err);
		return 1;
	}
}
// else if(num==2)
// {

// }
	
});
