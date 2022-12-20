// name:"Divya"==key:pair or property or field
const person = {
    name:"Divya",
    age:"28"

}
console.log(person);
//we can use function in inside the object
const person1 = {
    name:"Divya",
    age:"28",
    greet:function(){
        console.log('Hello '+this.name);
    }

}
person1.greet();
//we use above like in normal function only not able to use in arrow functions

//another type of function in object

const person2 = {
    name:"Divya",
    age:"28",
    greet(){
        console.log('Hello '+this.name);
    }

}
person2.greet();