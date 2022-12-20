const toArray = (arg1,arg2,arg3)=>{
    return [arg1,arg2,arg3];
}
console.log(toArray(1,2,3));
//console.log(toArray(1,2,3,4,5,6));if suppose we need to add function value means also we need to add args also to avoid this
const toArray1 = (...args)=>{//here this is not a spread operator, this is a rest operator because we use ...(rest operator) in function before parameter iside paranthisis
    return args;
}
console.log(toArray1(1,2,3,4,5,6));
//now we can print values without declare args

//when we use 3 dots in array syntax or object syntax that is spread operator,it uses separates the array or object values
//At the same time use 3 dots in function before parameters is rest operators