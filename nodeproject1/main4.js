var mysql=require("mysql");
var conn=mysql.createConnection({host:"127.0.0.1",user:"root",password:"root",database:"nodedb"});
conn.connect(function(err){
	if(err)
	{
		throw err;
	}
	console.log("connected");
	var sql="select * from node_logintable";
	conn.query(sql,function(err,result,fields)
	{
		if(err)
		{
			throw err;
		}
		console.log(result);
		console.log(result[0].password);//return 1st password record
		//console.log(fields);
	});
});