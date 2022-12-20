//You can delete a table, or collection as it is called in MongoDB, by using the drop() method.
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/";//mongodatabase-database name
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabase");
   	dbo.collection("logintable").drop(function(err, result) {
  	if(err)
	{
		throw err;
	}
	if(result)
		{
			console.log("Collection deleted");
		}
	db.close();
	});
});