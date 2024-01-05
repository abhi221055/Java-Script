const score = 400 
console.log(score)
// ye simple tarika hai number define ka 
// new tarike se number define karte hai.
const balance = new Number(100)
console.log(balance)


//Number ki properties
console.log(balance.toString().length)
//yaha humne number ko string me convert kar dia or uski length pata ki
console.log(balance.toFixed(2))
//ye e comerce sight me bhut use hoti hai.


const othernumber = 23.8966
console.log(othernumber.toPrecision(4))
//ye precise k lie use hota hai. ye dhyaan se use hota hai is me decimal k pehle priorty milti hai.


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))
//ye bdi value ko break kar k simple size me bata deta hai.



//+++++++++++++++++Maths+++++++++++++++++++++++++
//maths java script ki libarary hai.


console.log(Math)
console.log(Math.abs(-9))
//abs ka mtlb hai absolute value is me negative integer positive ban jata hai or positive positive hi rehta hai.


console.log(Math.round(4.55))
//round me value round off me kar ke de deta hai.


//agar hum chahte hai ki top ki value dikhae decimal k bad to ceil function use karte hai.
console.log(Math.ceil(4.2))


//agr hum chahte hai ki niche ki value dikhae to floor use karte hai.
console.log(Math.floor(3.8))


//sqrt ki sqaure root k lie use karte hai.
console.log(Math.sqrt(25))


//agr hume max or min value find karni ho to max and min use karte hai.

console.log(Math.min(2,3,4,5,6))
console.log(Math.max(5,7,8,9))


//agar random number chahiye to random function use karte hai.or ye value humesha 0 and 1 hi aayegi.
console.log(Math.random())
console.log((Math.random()*10)+1)
//yaha humne min value 1 define kar di  


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)