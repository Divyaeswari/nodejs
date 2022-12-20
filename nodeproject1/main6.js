var mysql=require("mysql");
var conn=mysql.createConnection({host:"127.0.0.1",user:"root",password:"root",database:"nodedb"});
conn.connect(function(err){
	if(err)
	{
		throw err;
	}
	console.log("connected");
	var sql="select * from node_logintable where password='div123'";
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