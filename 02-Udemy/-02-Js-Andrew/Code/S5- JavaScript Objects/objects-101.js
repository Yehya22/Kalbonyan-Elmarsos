let myBook = {
  title: "How to be a programmer!",
  author: "Halawa",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "How to be !!";

console.log(`${myBook.title} by ${myBook.author}`);

let me = {
  name: "Halawa",
  age: 27,
  location: "Cairo",
};

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);
me.age = me.age + 1;
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);
