//Insert Multiple record
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mongodatabasedb";//mongodatabase-database name--it creates
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var myobj = [{name:"Jin",pwd:"jin"},{name:"Bharathi",pwd:"bharathi"}];
	var dbo = db.db("mongodatabasedb")
	dbo.collection("tbl_login").insertMany(myobj,function(err,res){
		if(err)
		{
			throw err;
		}
		console.log("Records Inserted");
	    db.close();
	});
	
});