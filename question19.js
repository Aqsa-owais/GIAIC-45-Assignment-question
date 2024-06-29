"use strict";
//question 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Aqsa", "Misbah", "Rimsha", "Mahnoor", "Ayesha"];
console.log("Unfortunately! the new dinner table wont arrive so we can invite only 2 guest.");
guestList.unshift("Huma", "Hadeeba");
//print message updated list
console.log("Updated list of guest:", guestList);
// remove guest from the list
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry, ${removedGuest} we cant invite you.`);
    }
}
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you both are invited for the dinner`);
});
// remove 2 names from the list
guestList.splice(0, guestList.length);
//print updated empty list
console.log("Updated list of guest:", guestList);
