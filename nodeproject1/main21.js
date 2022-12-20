var mysql = require('mysql');
var prompt = require('prompt');
var conn = mysql.createConnection({host:"127.0.0.1",user:"root",password:"",database:"nodedb"});
conn.connect(function(err){
	if(err){
		throw err;
	}
	console.log('Connected');
	prompt.start();
	prompt.get(['username','password'],function(err,result){
		if(err){
			return onErr(err);
		}
		 var username=result.username;
		 var password=result.password;
		 console.log(result.username);
		 console.log(result.password);
		//var record=[[result.username,result.password]];
		//console.log(record);
		var sql = "insert into node_logintable (username,password) values ('"+username+"','"+password+"')";
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
	
});