//this also asynchronous method
//we can use promis method in when we dont know result is coming, and that resul may come positive or negative
//For example network request
//Promise is Javascript statement, it comes results depends on timing
let myPromise = new Promise((myResolve,myReject)=>{
    setTimeout(()=>{
        myResolve();//it is producing code it produces results
        //myReject();
    },2000)
    
}) 
//console.log(myPromise);
//then-victory
//catch-failed
myPromise.then(()=>{
    console.log("Success");
})
myPromise.catch(()=>{
    console.log("Failed");
})
//we called myResolve() function so output comes success, if suppose we call the myReject function then failed result prints

let myPromise1 = new Promise((myResolve,myReject)=>{
    setTimeout(()=>{
        myResolve("Divya");//it is producing code it produces results
        //myReject("Divya");
    },2000)
    
}) 
//console.log(myPromise);
//then-victory
//catch-failed
myPromise1.then((name)=>{
    console.log(name);
})
myPromise1.catch((name)=>{
    console.log(name);
})
//Another method
let myPromise2 = new Promise((myResolve,myReject)=>{
    setTimeout(()=>{
        myResolve("Divya");//it is producing code it produces results
        //myReject("Divya");
    },2000)
    
}) 
//console.log(myPromise);
//then-victory
//catch-failed
myPromise2.then((name)=>{
    return 'Name: '+name;
}).then((name)=>{
    console.log(name); 
})
myPromise2.catch((name)=>{
    console.log(name);
})

