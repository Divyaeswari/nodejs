//const hobbies = ['Sports','Cooking',2,{name:"Divya"}];
//inside array we can give string, number and objects
const hobbies = ['Sports','Cooking'];
for(const hobby of hobbies){
    console.log(hobby);
}
//print array values using arrow function
const hobbies1 = ['Sports','Cooking'];
hobbies1.map((hobby)=>{
    console.log('Hobby: '+hobby);
})

//we can simplify above code
const hobbies2 = ['Sports','Cooking'];
console.log(hobbies2.map(hobby=>'Hobby: '+hobby));
