//Filter Query
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/mymongodb";
MongoClient.connect(url,function(err,db){
	var dbo = db.db("mymongodb");
	var qry = {cname:"Neha"};
	dbo.collection("customer_tbl").find(qry).toArray(function(err,res){
		if(err)
		{
			throw err;
		}
		console.log(res);
		db.close();
	});
});