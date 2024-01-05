//Date

let myDate = new Date()
console.log(myDate);


//ab is date ko string me change kar k dekhte hai.
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(typeof(myDate))


//apni date banani ho to hum new date karke define kar sakte hai or months 0 se start hote hai.
let mycreatedate = new Date(2024,1,13)
console.log(mycreatedate.toDateString())



//agr time b define karna ho to vo b kar sakte hai.hum format b specific kar skte hai date month time ka 
let mynd = new Date(2023,1,23,5,26)
console.log(mynd.toLocaleString())


//++++++++++++++time stamps+++++++++++++++
let myTimeStamp = Date.now()
console.log(myTimeStamp) //agr abhi ki time stamp chahiye ho to .
console.log(mynd.getTime())
console.log(Math.floor(Date.now()/1000))



let newDate = new Date()
console.log(newDate) 
//agr hume specific date time ya year nikalana ho to nikal sakte hai as below
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)



newDate.toLocaleString('default',{
    weekday: "long"
})