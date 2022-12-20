//Drop the collection
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mongodatabasedb";//mongodatabase-database name--it creates
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabasedb")
	dbo.collection("tbl_login").drop(function(err,res){
		if(err)
		{
			throw err;
		}
		if(res)
		{
		console.log("Collection dropped");
	    }
	    db.close();
	});
	
});