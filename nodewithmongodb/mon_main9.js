//Remove the Record
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mongodatabasedb";//mongodatabase-database name--it creates
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabasedb")
	var qry = {name:"Jin"};
	dbo.collection("tbl_login").deleteOne(qry,function(err,res){
		if(err)
		{
			throw err;
		}
		console.log("Records Deleted");
	    db.close();
	});
	
});