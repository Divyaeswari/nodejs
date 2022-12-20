//create variable
const name = "Divya";
//console.log(name);
var age = 25;//int data type
var hasHobby = true;//boolean data type true means 1
//name = "Bharathi";//Assignment to constant variable.
//in const once we declared we can't redeclare again
function displayUser(userName, userAge, userHasHobby){
    return 'User name is '+userName+'\n'+'age is '+userAge+'\n'+'has hobby? '+userHasHobby;
}
console.log(displayUser(name, age, hasHobby));

