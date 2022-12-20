//Regular expression
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mongodatabasedb";//mongodatabase-database name--it creates
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabasedb")
	var qry = {pwd:/^j/};
	dbo.collection("tbl_login").find(qry).toArray(function(err,res){
		if(err)
		{
			throw err;
		}
		console.log(res);
	    db.close();
	});
	
});