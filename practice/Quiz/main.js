//alert("Welcome to Quiz Ninja!");

const question = "What is Superman's real name?";
//const answer = prompt(question);
//alert(`You answered ${answer}`);

const avengers = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Hawkeye",
  "Black Widow",
];

avengers.pop();
avengers.push("Spiderman");
console.log(avengers[avengers.length - 1]);
console.log(avengers);
console.log(avengers.join());
console.log(avengers.slice(2, 4));

avengers.splice(3, 1, "Scarlet Witch"); //destructive
console.log(avengers);

console.log(avengers.indexOf("Iron Man"));

console.log(avengers.includes("Iron Man"));

const n = 5;
n % 2 === 0
  ? console.log("n is an even number")
  : console.log("n is an odd number");

let bottles = 10;
while (bottles > 0) {
  console.log(
    `There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${
      bottles - 1
    } green bottles hanging on the wall`
  );
  bottles--;
}

for (let bottles = 10; bottles > 0; bottles--) {
  console.log(
    `There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${
      bottles - 1
    } green bottles hanging on the wall`
  );
}

for (let i = 1; i < 13; i++) {
  for (let j = 1; j < 13; j++) {
    console.log(`${j} multiplied by ${i} is ${i * j}`);
  }
}

for (let i = 0, max = avengers.length; i < max; i++) {
  console.log(avengers[i]);
}

function sum() {
  let operand = 1;
  let operand1 = 2;
  let result = operand + operand1;
  console.log(result);
}

sum();

function arguments() {
  return arguments;
}

//arguments("hello", NaN);
arguments(1, 2, 3, 4, 5);
console.log(arguments[0]);

function mean(...values) {
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total / values.length;
}

mean(2, 8, 13, 11, 4, 2);
console.log(total);
