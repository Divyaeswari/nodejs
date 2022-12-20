//Sort----1 is ascending, -1 is decending
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mongodatabasedb";//mongodatabase-database name--it creates
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabasedb")
	//var qry = {name:1};
	var qry = {name:-1};
	dbo.collection("tbl_login").find().sort(qry).toArray(function(err,res){
		if(err)
		{
			throw err;
		}
		console.log(res);
	    db.close();
	});
	
});