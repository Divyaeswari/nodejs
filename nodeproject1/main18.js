var mysql=require("mysql");
var conn=mysql.createConnection({host:"127.0.0.1",user:"root",password:"root",database:"nodedb"});
conn.connect(function(err){
	if(err)
	{
		throw err;
	}
	console.log("connected");
	var sql="select node_logintable.username as uname,customers.fav as favourite from node_logintable join customers on node_logintable.username=customers.name";
	//You can use INNER JOIN instead of JOIN. They will both give you the same result.
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