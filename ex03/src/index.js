// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
var myNewPets = myPetsArray.push("Bird", "Fish");
var firstPet = myPetsArray.pop();
var lastPet = myPetsArray.shift();
var x= myPetsArray.unshift('Lion');
// End of creating an array
// Create a function below this line
function myArrayFunction(myPets) {
return myPets
}
console.log(myArrayFunction(myPetsArray));
// End of creating a function
module.exports = myArrayFunction;
