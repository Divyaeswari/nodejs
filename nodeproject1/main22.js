var mysql = require('mysql');
var readline = require('readline-sync');
var prompt = require('prompt');
var conn = mysql.createConnection({host:"127.0.0.1",user:"root",password:"",database:"nodedb"});
conn.connect(function(err){
	if(err){
		throw err;
	}
	
	console.log('Connected');
	console.log('Insert: Type 1');
	console.log('Select: Type 2');
	console.log('Update: Type 3');
	console.log('Delete: Type 4');
	console.log("Enter the Option");
	let num=Number(readline.question());
	console.log(num);

	if(num==1)
	{
		prompt.start();
		prompt.get(['username','password'],function(err,result){
		if(err){
			throw err;
		}
         var username=result.username;
		 var password=result.password;
		 console.log(result.username);
		 console.log(result.password);
		//var record=[[result.username,result.password]];
		//console.log(record);
		var sql = "insert into node_logintable (username,password) values ('"+username+"','"+password+"')";
		conn.query(sql,function(err,result){
			if(err)
			{
				throw err;
			}
			console.log('Record is Inserted');
			console.log(result.affectedRows);
			// readline.promptLoop(function(input){
			// 	console.log('You Said '+input);
			// 	return input==='bye';
			// });
			// console.log("Exited");

		});
	});


  }

else if(num==2)
{
	var sql = "select * from node_logintable";
	conn.query(sql,function(err,result){
		if(err)
		{
			throw err;
		}
		console.log(result);
	});
}
else if(num==3)
{
	prompt.start();
		prompt.get(['username','password'],function(err,result){
		if(err){
			throw err;
		}
		var username=result.username;
		var password=result.password;

	var sql="update node_logintable set username='"+username+"', password='"+password+"' where username='divya'";
	conn.query(sql,function(err,result){
		if(err)
		{
			throw err;
		}
		console.log('Record Updated');
	});

	});
}
else if(num==4)
{
	var sql = "delete from node_logintable";
	conn.query(sql,function(err,result){
		if(err)
		{
			throw err;
		}
		console.log("Records Deleted");
	});
}

});
