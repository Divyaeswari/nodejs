//Insert Values
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/";//mongodatabase-database name
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	//var dbo = db.db("mydb"); here also database created
	var dbo = db.db("mongodatabase");
   // dbo.login.insert(({name:"divya", password:"1234"}), function(err, res) {
   // var myobj = {name:"divya", password:"1234"};
    var myobj = {name:"jin", password:"432"};
    //dbo.login.insert
    // collection.insert is deprecated. Use insertOne, insertMany or bulkWrite instead.
   	dbo.collection("login").insertOne(myobj, function(err, res) {
  	if(err)
	{
		throw err;
	}
	console.log("Row affected");
	console.log(res.affectedRows);
	db.close();
	});
});