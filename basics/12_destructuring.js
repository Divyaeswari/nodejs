const person = {name:"Divya"};
//name variable need to holds the person object value to do that
const name = person.name;
console.log(name);
//above is one method
//instead of above method
const person1 = {name1:"Divya"};
const {name1} = person1;
console.log(name1);
//This is destructuring method in this method we can use name1 object property as a variable and print object value
const person2 = {name2:"Divya",age2:28};
const {name2,age2} = person2;
console.log(name2,age2);
//this method we can use in array also
//we can take out array values as const variables using destructuring method
const hobbies = ['Sports','Cooking'];
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);
//we can take out object and array values as const variables using destructuring method

