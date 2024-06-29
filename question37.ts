//question 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default
// with a message that reads I love TypeScript. Make a large shirt and a medium
// shirt with the default message, and a shirt of any size with a different message.


function make_shirt(size: string, message: string = "I love TypeScript") {
  console.log(`Shirt size is ${size} and message is ${message}`);
}

make_shirt("large");

make_shirt("medium");

make_shirt("small", "This is my Brother shirt Size");



