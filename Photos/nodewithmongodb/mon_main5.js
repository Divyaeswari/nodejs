//sort() method to sort the result in ascending or descending order.
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/";//mongodatabase-database name
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabase");
	var mysort = { name: 1 };
   	dbo.collection("login").find().sort(mysort).toArray(function(err, result) {
  	if(err)
	{
		throw err;
	}
	console.log(result);
	db.close();
	});
});