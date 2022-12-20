var mysql=require("mysql");
var conn=mysql.createConnection({host:"127.0.0.1",user:"root",password:"root",database:"nodedb"});
conn.connect(function(err){
	if(err)
	{
		throw err;
	}
	console.log("connected");
	var sql="update node_logintable set password='krish123' where username='krish'";
	conn.query(sql,function(err,result)
	{
		if(err)
		{
			throw err;
		}
		console.log("Record is Updated");
		console.log(result.affectedRows);
	});
});