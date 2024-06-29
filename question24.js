"use strict";
//question 24
// More Conditional Tests: You don’t have to limit the number of tests you create to
// 10. If you want to try more comparisons, write more tests. Have at least one True
// and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater
// than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
Object.defineProperty(exports, "__esModule", { value: true });
//Tests for equality and inequality with stringsv
let person1 = 'Aqsa';
let person2 = 'Owais';
console.log(person1 === person2); //false
console.log(person1 !== person2); //true
//Tests using the lower case function
let upperCase = "HELLO";
let lowerCase = "hello";
console.log(upperCase.toLowerCase() !== lowerCase); //false
console.log(upperCase.toLowerCase() === lowerCase); //true
//Numerical tests involving equality and inequality, greater than and less than, greater
// than or equal to, and less than or equal to
let num1 = 10;
let num2 = 20;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
//Tests using "and" and "or" operators
let x = 10;
let y = 20;
let z = 30;
console.log(x < y && y < z); //true
console.log(x > y || y > z); //false
//Test whether an item is in a array
let countries = ["USA", "canada", "France", "Germany", "Japan"];
console.log(countries.includes("USA")); //true
//Test whether an item is not in a array
console.log(countries.includes("Pakistan")); //false
