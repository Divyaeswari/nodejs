var MongoClient = require('mongodb').MongoClient;
var readline = require('readline-sync');
var prompt = require('prompt');
var url = "mongodb://127.0.0.1:27017/mongodatabasedb";
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	console.log('Connected');
	console.log('Insert: Type 1');
	console.log('SelectAll: Type 2');
	console.log('Update: Type 3');
	console.log('Delete: Type 4');
	console.log('SelectOne: Type 5');
	console.log("Enter the Option");
	let num=Number(readline.question());
	console.log(num);
	if(num==1)
	{
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
}
if(num==2)
{
	// prompt.start();
	// prompt.get(['name','pwd'],function(err,result){
	// 	if(err){
	// 		return onErr(err);
	// 	}
		var dbo = db.db("mongodatabasedb");
		dbo.collection("tbl_login").find({}).toArray(function(err,res){
			if(err){
				throw err;
			}
			console.log(res);
			db.close();
		});
		//});
}
if(num==3)
{
	 prompt.start();
	 prompt.get(['name','pwd'],function(err,result){
	 	if(err){
	 		return onErr(err);
	 	}
		var dbo = db.db("mongodatabasedb");
		var myquery = { pwd: "1234" };
		var newvalues = { $set: {name:result.name,pwd:result.pwd } };
		dbo.collection("tbl_login").updateOne(myquery, newvalues, function(err, res) {
			if(err){
				throw err;
			}
			console.log("1 document updated");
			db.close();
		});
		});
}

if(num==4)
{
	prompt.start();
	 prompt.get(['name'],function(err,result){
	 	if(err){
	 		return onErr(err);
	 	}
		var dbo = db.db("mongodatabasedb");
		var myquery = { name: result.name };
		dbo.collection("tbl_login").deleteOne(myquery, function(err, res) {
			if(err){
				throw err;
			}
			console.log("Record Deleted");
			db.close();
		});
		});
}
if(num==5)
{
	prompt.start();
	 prompt.get(['pwd'],function(err,result){
	 	if(err){
	 		return onErr(err);
	 	}
		var dbo = db.db("mongodatabasedb");
		var myquery = { pwd: result.pwd };
		dbo.collection("tbl_login").findOne(myquery, function(err, res) {
			if(err){
				throw err;
			}
			console.log(res);
			db.close();
		});
		});
}

});