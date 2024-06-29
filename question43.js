"use strict";
//question 43
// Unchanged Magicians: Start with your work from Exercise 42. Call the function
// make_great() with a copy of the array of magicians’ names. Because the original
// array will be unchanged, return the new array and store it in a separate array. Call
// show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Harry", "David", "Alice"];
function show_magicians(name) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians(magicians);
function make_great(magician) {
    let greatMagicians = [];
    magicians.forEach(newMagicians => {
        greatMagicians.push(`${newMagicians} the great `);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice());
console.log("Orignal Magicians");
show_magicians(magicians);
console.log("great magicians");
show_magicians(greatMagicians);
