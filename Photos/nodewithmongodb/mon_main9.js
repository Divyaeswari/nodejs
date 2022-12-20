//To limit the result in MongoDB, we use the limit() method.
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/";//mongodatabase-database name
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabase");
   	dbo.collection("login").find().limit(2).toArray(function(err, result) {
  	if(err)
	{
		throw err;
	}
	console.log(result);
	db.close();
	});
});