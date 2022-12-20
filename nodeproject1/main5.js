var mysql=require("mysql");
var conn=mysql.createConnection({host:"127.0.0.1",user:"root",password:"root",database:"nodedb"});
conn.connect(function(err){
	if(err)
	{
		throw err;
	}
	console.log("connected");
	var sql="select username from node_logintable";
	conn.query(sql,function(err,result,fields)
	{
		if(err)
		{
			throw err;
		}
		console.log(result);
		console.log(fields);
		console.log(fields[0].name);//Return the name of 1st field
		console.log(fields[0].db);
	});
});
