//question 21
// They think of something you could store in a TypeScript Object. Write a program
// that creates Objects containing these items.

let ObjectContainingItems: { [key: string]: any } = {
  Laptop: {
    name: "Laptop",
    price: 80000,
    Description: "High performence laptop with high processor",
  },
  Mouse: {
    name: "Mouse",
    price: 1000,
    Description: "High performence laptop with high processor",
  },
  keyboard: {
    name: "Keyboard",
    price: 2000,
    Description: "High performence laptop with high processor",
  },
};
console.log(ObjectContainingItems);
