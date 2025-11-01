// Primitive

//7 types : String, Number , Boolean , Null , undefined , Symbol ,BigInt

const score=100
const scoreValue = 100.3

const isLoggedIn= false
const temp = null
let userEmail;

const id= Symbol('123');
const anotherid = Symbol('123');
console.log(id===anotherid);

const bignumber =23287326512735681238n

//Reference Type(Non-primitive)

// Arrays , Objects , Functions

const heroes=["shaktiman", " naagraj", "doga"];
 let myobj={
    name: "rishabh",
    age : 22,
 }

 const myfunc = function(){
    console.log("hello world");
 }

 console.log(typeof myfunc);