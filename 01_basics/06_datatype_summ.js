// Primitive data types.
// there are 7 types of primitive data types
//7 types: String, Number, Boolean, null, undefined,symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 35546546456n
//Reference (Non Primitive Data types.)
//array, objects, Functions.
//arrays in ko square brackets [] me rakhte hai.
const heros = ["shaktimaan", "naagraj","doga"]
//{} in ko curly braces me likhte hai
let myobj={
    name:"abhilash",
    age:22,
}
const myfunction = function(){
    console.log("Hello world");
}
console.log(typeof scoreValue)