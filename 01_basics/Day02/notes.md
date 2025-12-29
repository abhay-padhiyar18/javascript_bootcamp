JavaScript Data Types (Overview)

JavaScript has 8 data types, divided into:

1️⃣ Primitive Data Types (7)

Immutable (cannot be changed)

Stored by value

2️⃣ Non-Primitive Data Type (1)

Mutable

Stored by reference

1️⃣ Primitive Data Types
🔹 1. Number

Used for integers and floating-point values.

let age = 25;
let price = 99.99;


Includes: positive, negative, decimal

Special values:

Infinity
-Infinity
NaN   // Not a Number


Interview Tip:
JavaScript has no separate int or float → everything is Number.

🔹 2. String

Used to store text.

let name = "Abhay";
let city = 'Vadodara';


Written in ' ', " ", or `

Strings are immutable

name[0] = "A"; // ❌ Not allowed

🔹 3. Boolean

Represents true or false.

let isLoggedIn = true;
let isAdmin = false;


Used heavily in:

Conditions

Authentication

Validations

🔹 4. Undefined

A variable declared but not assigned a value.

let x;
console.log(x); // undefined


📌 JS engine automatically assigns undefined

🔹 5. Null

Represents intentional empty value.

let user = null;


📌 Set by developer, not JS.

Interview Question:
👉 typeof null = "object" (this is a known JS bug)

🔹 6. Symbol (ES6)

Used to create unique identifiers.

let id = Symbol("id");


Mostly used in advanced JS / libraries

Values are always unique

🔹 7. BigInt

Used for very large numbers beyond safe limit.

let bigNum = 12345678901234567890n;


📌 Add n at the end

2️⃣ Non-Primitive Data Type
🔹 Object

Used to store multiple values.

let user = {
  name: "Abhay",
  age: 23,
  city: "Vadodara"
};


Includes:

Object

Array

Function

let arr = [1, 2, 3];
let greet = function() {
  console.log("Hello");
};


📌 Objects are mutable
📌 Stored by reference

typeof Operator (Very Important)
typeof 10        // "number"
typeof "hello"   // "string"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object" ❌
typeof {}        // "object"
typeof []        // "object"
typeof function(){} // "function"

🔥 Common Interview Questions
Q1. Difference between null and undefined?
null	undefined
Assigned by developer	Assigned by JS
Intentional empty	Value not given
typeof = object	typeof = undefined
Q2. Primitive vs Non-Primitive?
Primitive	Non-Primitive
Stored by value	Stored by reference
Immutable	Mutable
Faster	Slower
Q3. Is JavaScript statically or dynamically typed?

✅ Dynamically Typed

let x = 10;
x = "hello"; // allowed

✅ One-Line Interview Summary

JavaScript has 8 data types:
7 primitive (Number, String, Boolean, Undefined, Null, Symbol, BigInt) and 1 non-primitive (Object).