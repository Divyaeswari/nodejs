//sort
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/mymongodb";
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mymongodb");
	var qry = {cname:-1};
	//var qry = {cname:1};
	dbo.collection("customer_tbl").find().sort(qry).toArray(function(err,res){
		if (err) {
			throw err;
		}
		console.log(res);
		db.close();
	});
});