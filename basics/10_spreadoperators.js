const hobbies1 = ['Sports','Cooking'];
//some times we need to copy array values, 
const hobbies2 = hobbies1;//this method is wrong we can't copy the array value like this
hobbies2.push('Programming');
//we push value for hobbies2 but its shows in hobbies1
console.log(hobbies1);
//proper copy method is
const hobbies12 = ['Sports','Cooking'];
console.log(hobbies12);
const hobbies3 = hobbies12.slice();
hobbies3.push('Programming');
console.log(hobbies3);
//next array inside array
const hobbies23 = ['Sports','Cooking'];
const hobbies4 = [hobbies23];
hobbies4.push('Programming');
console.log(hobbies4);
//now take out values from array inside array
const hobbies5 = ['Sports','Cooking'];
const hobbies6 = [...hobbies5];//... means spread operator, it take out the values from hobbies5 array
hobbies6.push('Programming');
console.log(hobbies6);
//we can use the spread operators also for objects
const person = {name:"Divya"};
const student = {...person};
console.log(person,student);
console.log(person);
console.log(student);
//to know this is copy data add another obj value in 2nd const
const person1 = {name:"Divya"};
const student1 = {...person1,age:28};
console.log(person1,student1);

