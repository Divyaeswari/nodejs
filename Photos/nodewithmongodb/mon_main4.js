//Query-To find particular row
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/";//mongodatabase-database name
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabase");
	var query = { password: "1234" };
   	dbo.collection("login").find(query).toArray(function(err, result) {
  	if(err)
	{
		throw err;
	}
	console.log(result);
	db.close();
	});
});