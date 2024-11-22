// Primitive

//  7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "usha",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3

// JavaScript is a dynamic language, which means that variables can hold values of different types during runtime.





// ++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap (Non-Primitive) Memory

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email);