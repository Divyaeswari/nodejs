function sum(a,b){
    return a+b;
}
console.log(sum(1,2));
//now we change into arrow function above fn
const sum1 = (a,b)=>{
    return a+b;
}
console.log(sum1(3,2));

const hasOne = (a)=>a+1
console.log(hasOne(1));