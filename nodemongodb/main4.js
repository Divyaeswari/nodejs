//Insert Multiple record
var MongoClient = require("mongodb").MongoClient;
var url  = "mongodb://127.0.0.1:27017/mymongodb";
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mymongodb");
	var myobj = [{cname:"Neha",city:"Salem"},{cname:"Nisha",city:"Coimbatore"}];
	dbo.collection("customer_tbl").insertMany(myobj,function(err,res){
		if(err)
		{
			throw err;
		}
		console.log("Records Inserted");
		db.close();
	});
});	