
var http=require("http");
http.createServer(function(request,response){
	//send the HTTP header
	//HTTP status: 200 ok
	//Content Type:text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	//response.writeHead(200,{'Content-Type':'text/html'});
	// response.write("<form>");
	// response.write("<input type='text'>");
	// response.write("<input type='password'>");
	// response.write("<input type='submit'>");
	// response.write("</form>");
	//send the response body as helloworld
	response.end("Hello World\n");
//document.write('server running at http://127.0.0.1:8081/');

}).listen(8081);//8081-port number(server.listen)-it listens the request come in which port then run and response
//console will print the msg
console.log('server running at http://127.0.0.1:8081/');
