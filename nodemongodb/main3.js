//Insert one record
var MongoClient = require("mongodb").MongoClient;
var url  = "mongodb://127.0.0.1:27017/mymongodb";
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mymongodb");
	var myobj = {cname:"Ram",city:"Chennai"};
	dbo.collection("customer_tbl").insertOne(myobj,function(err,res){
		if(err)
		{
			throw err;
		}
		console.log("1Record Inserted");
		db.close();
	});
});	