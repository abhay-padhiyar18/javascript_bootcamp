// Primitive Data Types in JavaScript
// 7 Primitive Data Types:
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// Everything else is an Object


const score = 100; // Number
const scoreValue = 110.3; // Number with decimal value
const isLoggedIn = false; // Boolean

const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol("1234"); // Symbol
const anotherId = Symbol("1234"); // Symbol

console.log(id === anotherId); // false
const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

//Reference Types(non Primitive) // 1. Object
// 2. Array
// 3. Function