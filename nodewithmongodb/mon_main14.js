var MongoClient = require('mongodb').MongoClient;
var prompt = require('prompt');
var url = "mongodb://127.0.0.1:27017/mongodatabasedb";
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	prompt.start();
	prompt.get(['name','pwd'],function(err,result){
		if(err){
			return onErr(err);
		}
		var myobj = {name:result.name,pwd:result.pwd};
		var dbo = db.db("mongodatabasedb");
		dbo.collection("tbl_login").insertOne(myobj,function(err,res){
			if(err){
				throw err;
			}
			console.log('1 record inserted');
			db.close();
		});
});
	function onErr(err)
	{
		console.log(err);
		return 1;
	}
});