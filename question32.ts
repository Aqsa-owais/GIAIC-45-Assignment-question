//question 32
//. Checking Usernames: Do the following to create a program that simulates how
// websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the
// new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If
// it has, print a message that the person will need to enter a new username. If a username
// has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should
// not be accepted.

let currentUsers: string[] = ["Aqsa", "Iqra", "Rimsha", "Mahnoor", "Ayesha"];
let newUsers: string[] = ["Misbah", "Kiran", "Aqsa", "Mahnoor", "omaima"];

newUsers.forEach((newUsers) => {
  if (
    currentUsers.some(
      (currentUser) => currentUser.toLowerCase() === newUsers.toLowerCase()
    )
  ) {
    console.log(`${newUsers} will need to enter a new username.`);
  } else {
    console.log(`${newUsers} is available.`);
  }
});

let lower_current_users = currentUsers.map((user) => user.toLowerCase());

for (let new_user of currentUsers) {
  let lower_new_user = new_user.toLowerCase();

  if (lower_current_users.includes(lower_new_user)) {
    console.log(
      `The username "${new_user}" is already taken. Please enter a new username.`
    );
  } else {
    console.log(`The username "${new_user}" is available.`);
  }
};
