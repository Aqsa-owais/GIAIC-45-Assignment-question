"use strict";
//question 14
//. Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to invite to
// dinner. Then use your list to print a message to each person, inviting them to
// dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// define array of guest
let guestList = ["Aqsa", "Iqra", "Rimsha", "Mahnoor", "Ayesha",];
// invite each guest for dinner
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, You are cordially invited to dinner.`);
}
