//Arrays (in ko sqare brackets me define karte hai.) is me multiple elements in single objects. as no string array boolean bhi.

const myArr = [0,1,2,3,4,5]
const myHeros = ["kalksa","shaktimaan"]
const myArr2 = new Array(5,6,7,8,9)
console.log(myArr[3])
//yaha humne direct elemnt nikala.


//array methods
myArr.push(6)
//yaha ye add kar dega last me 
console.log(myArr)
//agar hume delete karna ho to pop use karte hai.ye sirf last value ko hi delete karta hai.
myArr.pop()
console.log(myArr)


// agar hume starting me value add karni hai to unshift() bracket me value as below
myArr.unshift(8)
console.log(myArr)


//agar hume starting ki hi value udani ho to shift se sidha as belw
myArr.shift()
console.log(myArr)

//agar array se kuch puchna ho to 
console.log(myArr.includes(11))
console.log(myArr.indexOf(5))

const newArr = myArr.join()
//join se ye array ko string m convert kar deta hai.
console.log(newArr)



//++++++++++++slice and splice+++++++++++++++++++++++
console.log("A",myArr)
const myn1 = myArr.slice(1,4)
//yaha slice ka mtlb hai ki sirf 1 se 3 tak hi value dikhaega 4th ko consider nahi karega.orignal array m koi fark ni pada.
console.log(myn1)
console.log("B",myArr)



//splice me array hi manipulate ho jaata hai or jo humne index define kie ho vo out put dikhata hai.or ye b last waale ko range ko consider nahi karta.
console.log("C",myArr)
const myn2 = myArr.splice(0,3)
console.log(myn2)
console.log("my array has now manipulated after splicing the indexes and the oringal array has now remove those values and values left are  ",myArr)