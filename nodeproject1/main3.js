var mysql=require("mysql");
var conn=mysql.createConnection({host:"127.0.0.1",user:"root",password:"root",database:"nodedb"});
conn.connect(function(err){
	if(err)
	{
		throw err;
	}
	console.log("connected");
	var sql="insert into node_logintable values('surya','surya12'),('xam','xam12')";
	conn.query(sql,function(err,result)
	{
		if(err)
		{
			throw err;
		}
		console.log("Record is Inserted");
		console.log(result.affectedRows);
	});
});