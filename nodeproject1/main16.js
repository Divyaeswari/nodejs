var mysql=require("mysql");
var conn=mysql.createConnection({host:"127.0.0.1",user:"root",password:"root",database:"nodedb"});
conn.connect(function(err){
	if(err)
	{
		throw err;
	}
	console.log("connected");
	var sql="select * from node_logintable limit 2 offset 2";//Start from position 3, and return the next 2 records:
	conn.query(sql,function(err,result)
	{
		if(err)
		{
			throw err;
		}
		console.log(result);
		//console.log(fields);
	});
});