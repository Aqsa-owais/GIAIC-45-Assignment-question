"use strict";
//question 20
// Think of something you could store in a array. For example, you could make a list
// of mountains, rivers, countries, cities, languages, or anything else you’d like. Write
// a program that creates a list containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
let countries = ["USA", "canada", "France", "Germany", "Japan"];
// print list of countries
console.log("List of countries:", countries.forEach(country => {
    console.log(country);
}));
