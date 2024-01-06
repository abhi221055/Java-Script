//Objects ko singleton se b define kar sakte hai. object ko curly braces se define karte hai{}

//Object literals

//object.create ko bolte hai constructor method ye object ko define karne ka ek method hai or isi k under banta hai singleton objects.
// Object.create


const mySym = Symbol("key1")
//symbol ko object me define []k under const ka nam likh ke define karte hai nahi to vo is ko as a string hi consider karta hai. and console.log([mysym]) me b same syntax me likhna padta hai.
const JsUser = {
    name:"Abhilash","full name":"Abhilash Sharma",
    age:22,
    [mySym]:"mykey1",
    location:"Himachal",
    email:"abhilash@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.age)
//ek method to hai ye is se bhi objects k under ko access kar sakte hai or ye hi sab se jayada use hoga
console.log(JsUser["age"]) //ye method kam hi use karenge
console.log(JsUser[mySym])


//agar object ki value m koi b change karna ho to sidhe hi object name.jo change karna hai or direct value as below
JsUser.email = "abhisharma@google.com"
console.log(JsUser["email"])


//+++++++++++++++VV# agar hum chahte hai ki object ki value ko koi b change na kar pe to side hi object.freeze() or yaha object ka naame as below
// Object.freeze(JsUser)
JsUser.age=55
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user")
}
console.log(JsUser.greeting())  //greeting lagate hai to ( ) in braces me.
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.email}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());