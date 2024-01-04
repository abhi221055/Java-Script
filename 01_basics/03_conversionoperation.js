let score = "33abcd"
console.log(typeof(score))
// ab hum score ki data type change karenge to usko number define kar denge as below.Nan mtlb not a number
let valueInNumber = Number(score)
console.log(typeof(score))
console.log(typeof(valueInNumber))
console.log(valueInNumber)
// "33"= 33 ye number me conver easily change ho jata hai
// "33abc"=> Nan
// true =>1, false => 0
let isLoggedIn = "abhilash"
// agr empty rakhenge isloggedin ko to ye false or agr value di to abhilash to ye true dega 
// 0  pe false or 1 p true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))
// yaha per 33 ab string ban chuka hai.