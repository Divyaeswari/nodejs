//Create Collection
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mongodatabasedb";//mongodatabase-database name--it creates
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabasedb")
	dbo.createCollection("tbl_login",function(err,res){
		if(err)
		{
			throw err;
		}
		console.log("Collection is Created");
	db.close();
	});
	
});