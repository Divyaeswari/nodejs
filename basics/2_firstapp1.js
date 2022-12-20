//we can add node js package in inside the require, now we use filesystem package 
const fs = require('fs');
//writeFileSync creates a file in our local system
fs.writeFileSync('hello.txt','Hello from Node JS');
//text file created with given sentence