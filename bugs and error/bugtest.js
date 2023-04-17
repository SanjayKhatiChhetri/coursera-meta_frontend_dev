var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
console.log(burger[2]);

try {
  throw new Error();
  console.log("Hello");
} catch (err) {
  console.log("Goodbye");
}

var result;
console.log(result);

var str = "Hello";
str.match("jello");

try {
  Number(5).toPrecision(300);
} catch (e) {
  console.log("There was an error");
}
