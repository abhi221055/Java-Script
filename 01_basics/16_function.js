//+++++++++++++++functions++++++++++++++++++++++++

function myfullname(){
    console.log("a")
    console.log("b")
    console.log("h")
    console.log("i")
    console.log("l")
    console.log("a")
    console.log("s")
    console.log("h")
}
// console.log(myfullname())
// myfullname()
//direct b print karwa sakte hai by function name se or () ye brackets.


//jab hum function k under define karte hai to unko parametres bolte hai or jo console m pass krate hai vo argument hota hai 
//function addTwoNumber(number1,number2)
// {
//             console.log(number1+number2)

// }
function addTwoNumber(number1,number2)
{
            let result = number1+number2
         
            return result
//return k baad koi b koi b code kaam ni karta uske upr k code hi kaam karte hai usk niche ka code kaam ni karta 
}

//agar humne yaha string k format me de diya ya null de dia to ye us hisab se krarega as below
// addTwoNumber(3,"23a")
 const result = addTwoNumber(3,14)
//  console.log("Result:",result)



function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a user name")
        return
    }
    return`${username} just logged in `
}

// console.log(loginUserMessage("Abhilash"))
console.log(loginUserMessage())
//yaha p loop chal rahi hai jab user name undefined hai to uper waala parta chal raha hai or jab name define kar rahe hai to just logged in waala part chal raha hai. 
//agar blank rakhte hai to ye undefined aata hai null nahi