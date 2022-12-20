//You can update a record, or document as it is called in MongoDB, by using the updateOne() method.
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/";//mongodatabase-database name
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabase");
	var myquery = { password: '1234' };
	var newvalues = { $set: {name: "Bharathi", address: "123" } };
   	dbo.collection("login").updateOne(myquery,newvalues,function(err, result) {
  	if(err)
	{
		throw err;
	}
	console.log("1 document updated");
	db.close();
	});
});