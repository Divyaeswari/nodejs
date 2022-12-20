//Create Collection
var MongoClient = require("mongodb").MongoClient;
var url  = "mongodb://127.0.0.1:27017/mymongodb";
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mymongodb");
	dbo.createCollection("customer_tbl",function(err,res){
		if(err)
		{
			throw err;
		}
		console.log("Collection created");
		db.close();
	});
});