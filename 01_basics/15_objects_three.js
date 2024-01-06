const course = {
    cousrname: "Js in hindi",
    price:"999",
    courseInstructor:"Abhilash"
}
// course.courseInstructor 
//yaha hum object ki destructuring sikh rahe hai humne yaya jo b value chahiey vo new const m define ki or jis object se chahiye vo equal to k pass likh dia.
const{courseInstructor:instructor} = course
// console.log(courseInstructor)
console.log(instructor)

//+++++++++++++++json b object ki trh hi likhte hai bs is me define ni karte ki kya hai+++++++++++++++
{
    // ye json(java script object notation) hai or is ke string m hi key or string m hi value dete hai as below
    "name"="avb"
    "age"="33"
}