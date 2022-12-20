var name="krish";
var pwd="krish12";
var mysql=require("mysql");
var conn=mysql.createConnection({host:"127.0.0.1",user:"root",password:"root",database:"nodedb"});
conn.connect(function(err){
	if(err)
	{
		throw err;
	}
	console.log("connected");
	var sql="select * from node_logintable where username= ? or password=?";
	conn.query(sql, [name,pwd],function(err,result)
	{
		if(err)
		{
			throw err;
		}
		console.log(result);
		//console.log(fields);
	});
});