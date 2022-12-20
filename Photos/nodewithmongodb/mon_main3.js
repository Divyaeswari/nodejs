//Find Values
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/";//mongodatabase-database name
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabase");
   	dbo.collection("login").findOne({}, function(err, res) {
  	if(err)
	{
		throw err;
	}
	console.log(res.name);
	console.log(res.password);
	db.close();
	});
});