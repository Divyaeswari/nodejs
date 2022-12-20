//create variable
var name = "Divya";
console.log(name);
var age = 25;//int data type
var hasHobby = true;//boolean data type true means 1
//we knew how to create variables and knew about data types
//now we learn about functions
function displayUser(userName, userAge, userHasHobby){
    return 'User name is '+userName+'\n'+'age is '+userAge+'\n'+'has hobby? '+userHasHobby;
}
console.log(displayUser(name, age, hasHobby));

