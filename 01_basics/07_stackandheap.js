//+++++++++++++++++++++++++++++++++++
// two types of memory
//stack and heap
//stack (Primitive),Heap (Non-Primitive)
let myyoutubename = "abhilashsharma.com"
let anothername = myyoutubename

anothername - "chaiaurcode"

console.log(anothername);
console.log(myyoutubename);

let userone ={
    email:"hitesh@gmail.com",
    upi:"user@ybl"
}
let userTwo = userone
 userTwo.email = "abhilashsharma@gmail.com"

 console.log(userone.email);
 console.log(userTwo.email);