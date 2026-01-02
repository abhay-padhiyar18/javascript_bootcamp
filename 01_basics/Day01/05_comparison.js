// console.log(2 > 1); // true
// console.log(2 == "2"); // true
// console.log(2 < 1);

// console.log(2 == 1);
// console.log(2 != 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// Explanation:
// In the first comparison (null > 0), null is converted to 0, so it evaluates to false.
// In the second comparison (null == 0), null is only equal to undefined, so it evaluates to false.
// In the third comparison (null >= 0), null is converted to 0, so it evaluates to true.

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
// Explanation:
// In all comparisons involving undefined, it is not converted to a number.
// Therefore, all comparisons evaluate to false.

console.log("2" === 2);
console.log(2 === 2);
