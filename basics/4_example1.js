//create variable
let name = "Divya";
console.log(name);
let age = 25;//int data type
let hasHobby = true;//boolean data type true means 1
//let name = "Bharathi";//Identifier 'name' has already been declared, but
name = "Bharathi";
//Now we use const in example2.js
function displayUser(userName, userAge, userHasHobby){
    return 'User name is '+userName+'\n'+'age is '+userAge+'\n'+'has hobby? '+userHasHobby;
}
console.log(displayUser(name, age, hasHobby));

