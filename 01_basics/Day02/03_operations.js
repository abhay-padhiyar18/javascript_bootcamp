let score = true;
console.log(typeof score); // number
console.log(typeof (score)); // number

let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
console.log(valueInNumber); // number


// Examples of Number() conversion
// "33" => 33
// "18abc" => NaN
//true => 1
// false => 0
// null => 0
// undefined => NaN
// " " => 0

let isLoggedIn = "1";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true
console.log(typeof booleanIsLoggedIn); // boolean

// Examples of Boolean() conversion
// 1 => true;
// "0" => false
// "Abc" => true"

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string