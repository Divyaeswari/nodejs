// in Javascript having timeout function
setTimeout(()=>{
    console.log('Timer is done');
},2000);

setTimeout(()=>{
    console.log('Timer is done');
},1);
console.log('Hai');
console.log('Hello');
// In above hai and hello prints first, after finish 1 sec then only Timer is done prints--This is called as non blocking
const fetchData = (callback)=>{
    callback("Function Executed");
}
setTimeout(()=>{
    fetchData((result)=>{
        console.log(result);
    })
    
},2000);