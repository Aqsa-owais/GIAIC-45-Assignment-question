"use strict";
//question 44
// Sandwiches: Write a function that accepts a array of items a person wants on a
// sandwich. The function should have one parameter that collects as many items as
// the function call provides, and it should print a summary of the sandwich that is
// being ordered. Call the function three times, using a different number of
// arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwhich(...items) {
    console.log("\n Make sandwhich with following items: \n");
    items.forEach((singleItem) => {
        console.log(singleItem);
    });
    console.log("\n Now Enjoy Your Sandwhich");
}
makeSandwhich("bread", "butter");
makeSandwhich("bread", "butter", "chickeen");
makeSandwhich("bread", "butter", "cacumber", "cheese", "mayo");
