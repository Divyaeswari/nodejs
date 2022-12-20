//Remove the record
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/mymongodb";
MongoClient.connect(url,function(err,db){
	if (err) {
		throw err;
	}
	var dbo = db.db("mymongodb");
	var qry = {cname:"Nisha"};
	dbo.collection("customer_tbl").deleteOne(qry,function(err,res){
		if (err) {
			throw err;
		}
		console.log("Record Deleted");
		db.close();
	});

});