//Create Database
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mongodatabase";//mongodatabase-database name--it creates
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	console.log("Databases Created");
	db.close();
});