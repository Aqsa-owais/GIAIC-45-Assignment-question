"use strict";
//question 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote
//and the name of its author. Your output should look something like the following,
//including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything
//new
Object.defineProperty(exports, "__esModule", { value: true });
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
//question 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name
//in a variable called famous_person. Then compose your message and store it in a
//new variable called message. Print your message.
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);
