"use strict";
//question 42
// Great Magicians: Start with a copy of your program from Exercise 41. Write a
// function called make_great() that modifies the array of magicians by adding the
// phrase the Great to each magician’s name. Call show_magicians() to see that the
// list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Harry", "David", "Alice"];
function show_magicians(name) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians(magicians);
function make_great(magician) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + "The Great";
    }
}
make_great(magicians);
show_magicians(magicians);
