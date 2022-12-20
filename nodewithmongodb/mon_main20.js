var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mongodatabasedb";//mongodatabase-database name--it creates
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	console.log("connected")
	var dbo = db.db("mongodatabasedb")
	var qry = {"skills":{$in:["Tax","Sales"]}};
	dbo.collection("employees").find(qry).toArray(function(err,res){
		if(err)
		{
			throw err;
		}
		console.log(res);
	    db.close();
	});
	
});