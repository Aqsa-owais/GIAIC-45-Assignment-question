"use strict";
//question 31
//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is
// printed.
Object.defineProperty(exports, "__esModule", { value: true });
//exercise 30 code
let usernames = ["Admin Abdullah", "Eric", "Mahnoor", "Aqsa", "Iqra"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "Admin Abdullah") {
        console.log(`Hello ${usernames[i]}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
;
// new code start here
let users = ["admin", "user1", "user2", "user3", "user4"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
