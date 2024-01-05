const marvel_heros = ["thor","IronMan","spidermen"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros)
//yaha ab isne dc heros ko 4th arry consider kia ab agr hume usk under ki value nikalni ho to sibiling use karna padega 
// console.log(marvel_heros)
// console.log(marvel_heros[3][0])


//concat ye two or more arrays ko join karta hai or ek new array return karta hai.
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)


//spread method b hota hai ye b concat ki trh hi kam karta hia pr isko 3 dot se karte hai.ye jyada use hota hai yaha multiple arrays join kar sakte hia jab ki concat me 1 hi add hota hai.
const all_Nw_Heros = [...marvel_heros,...dc_heros]
console.log(all_Nw_Heros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
//yaha p jitne b arrray k under arry the vo sab 1 hi array k under aajayegi flat se or brackets me infinity use karte hai.
console.log(real_another_array)




console.log(Array.isArray("Abhilash"))
//yaha humne string ko pucha ki array hai to false aaya 
//agar hume string ko hi array banana hai to sidhe from likh denge or ye abhilash ko array bana dega. ab ye array ban gaya.
console.log(Array.from("Abhilash"))


//intresting interview k lie yaha ye function ko agar array na bana pae to khali array dikhata hai.
console.log(Array.from({name:"Abhilash"}))


let score1 = 100
let score2 = 200
let score3 = 300

//ab yaha multiple variable hai or number me hai.to yaha array.of me sidhe variable name dene hai to ye unko array bana dega.
console.log(Array.of(score1,score2,score3))
// console.log(Array.of("Abhialshas")) ye b kam kar raha hai par yaha ye purenaam ko 1 hi array bana raha hai alphabat wise nahi.




//++++++++Read more about isarray,from,of +++++++++++