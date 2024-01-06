// const tinder = new Object() ye singleton obeject hai 
const tinderUser ={}
tinderUser.id = "121abc"
tinderUser.name = "Sammy"
tinderUser.islooggedin = false

// console.log(tinderUser)

const regularUser ={
    email:"sum@gmail.com",
    fullname:{
        userfullname:{
            firstname:"abhi",
            lastname:"sharma",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)
//. se hum nesting kar sakte hai under se under ja sakte hai.

//+++++++++++comibing of objects+++++++++
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}
// const obj3 = Object.assign({},obj1,obj2)
//ye b ek method hai objects ko join karne ka or is me {}ye rakh k karte hai taki ye target bane or baaki source bane. Par hum spread waala hi use karenge
const obj3 ={...obj1,...obj2,...obj4}
console.log(obj3)



//agar hume puri values,keys nikalni ho ya entries nikalni ho to hum ese extract karenge
//keys hoti hai jo hum left side dete hai jese name, id , age  or values hoti hai jo hum keys ko dete hai.jese abhilash, 22, ab@gmail.com
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


//++++++++++++agar hume objct ko puchna hai ki usme vo value hai to hasownproperty use karte hai++++++++
console.log(tinderUser.hasOwnProperty("age"))
//yaha age nahi thi to false aaya.+++++++++++++++