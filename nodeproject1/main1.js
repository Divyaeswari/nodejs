var mysql=require("mysql");
var conn=mysql.createConnection({host:"127.0.0.1",user:"root",password:"root"});
conn.connect(function(err){
	if(err)
	{
		throw err;
	}
	console.log("connected");
	conn.query("create database nodedb",function(err,result)
	{
		if(err)
		{
			throw err;
		}
		console.log("database Created");
	});
});