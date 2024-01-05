const name = "abhilash"
const repoCount = 50

// console.log(name + repoCount +" Value");

// console.log(``) `` is ko backticks bolte hai or aaj kal isko hi jyaga use karte hai. isme string corelation chalta hai or is me place holder bnate hai or us k under variable inject kar dete hai as below
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)


// string ko aaj kal new tarike se define karte hai jese const newName = new(ab java script k object use karte hai )String('abhilashsh')

const newName = new String('Abhilash-sh-com')
console.log(newName[0]);
console.log(newName.__proto__); //agr prototype dekhne ho to 


console.log(newName.length);
console.log(newName.toUpperCase())
console.log(newName.charAt(3)) 
//agr dekhna hai ki kon si  position p kon sa chracter dekhna ho to charat() or bracket me number


console.log(newName.indexOf('s'))
// Agr hume dekhna ho ki word kon se index p hai to hum indexof('a') ese define karte hai.


const newString = newName.substring(0,4) 
//is me last me jo value ho vo count nahi ho ri hai.
console.log(newString);


const anotherString = newName.slice(-9,5)
//slice me hum negative value b de sakte hai.ye bahut use hota hai 
console.log(anotherString);


//trim and replace method

const newNameOne = "  abhilash   "
//spacing ko theek karne k lie trim function use karte hai. trim start and trim and b hai. 
console.log(newNameOne);
console.log(newNameOne.trim());


const url = "https://abhilash.com/abhilash%20sharma"
//is me hum replace kar sakte hai. is me .replace(22,55)coma k bad jis se replace karna hai vo value dalte hai. 
console.log(url.replace('%20','-'))


//agr hame puchna ya pata karna ho ki vo cheez string me present hai ki nahi to hum puch sakte hai jese .url.include(yaha jo puchna hai.)is ka jawab true and false me aata hai.
console.log(url.includes('abhi'))


//agr hum chahte hai ki word jo hai split ho jae based on - or space or coma to hum split method use karte hai.
console.log(newName.split('-'))


//String Practise
const sentence =new String("The quick brown fox jumps over the lazy dog")
const index = 1
console.log
(`the character code at ${sentence.charCodeAt()} is equal to ${sentence.charAt()}` )
//at se pata karte hai ki vaha p konsa chracter hai. 
console.log(sentence.concat('at')) 
//concat add kar deta hai.