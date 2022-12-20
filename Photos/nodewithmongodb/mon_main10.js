//db.products.insertMany([{ _id: 155, name: 'Tasty Lemons' },{ _id: 156, name: 'Vanilla Dreams' }])
//MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/";//mongodatabase-database name
MongoClient.connect(url,function(err,db){
	if(err)
	{
		throw err;
	}
	var dbo = db.db("mongodatabase");
   	dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, result) {
  	if(err)
	{
		throw err;
	}
	console.log(JSON.stringify(result));
	db.close();
	});
});