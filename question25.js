"use strict";
//question 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable
// called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message
// that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The
// version that fails will have no output.)
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points."); // printing  so it passes if test
}
;
// version 2:
let alien_colors = 'red';
if (alien_colors === 'yellow') {
    console.log("The player just earned 5 points."); // no output: this version fails if test
}
;
