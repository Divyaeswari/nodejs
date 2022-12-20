//for this program,we need to create a server inside the node this is called Core Modules
//Some Core odules-fs,http,https,path,os
//http-it creates a http server
//https-it creates a secure http server
//fs-it reades or writes a files in node js
//path-file path
const http = require('http');
function rqListener(req,res){
    console.log(req);
}
const server = http.createServer(rqListener);
server.listen(3000);

//Another types to write same program
//1.
const http = require('http');

const server1 = http.createServer(function (req,res){
    console.log(req);
});
server1.listen(3000);
//2.
const http = require('http');

const server2 = http.createServer((req,res)=>{
    console.log(req);
});
server2.listen(3000);