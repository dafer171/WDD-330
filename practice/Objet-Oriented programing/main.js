//creating a dice Object
const dice = {
  sides: 6,
  roll() {
    return Math.floor(this.sides * Math.random() + 1);
  },
};

//creating a dice Object using constructor function.
const Dice = function (sides = 6) {
  this.sides = sides;
  this.roll = function () {
    return Math.floor(this.sides * Math.random() + 1);
  };
};

//create an instance of the dice constructor function using the new operator.
const redDice = new Dice();
console.log(redDice);
//<< Dice { sides: 6, roll: [Function] }

let result = redDice.sides;
let result1 = redDice.roll();
console.log(result1);

//class declaration
class Dice1 {
  constructor(sides = 6) {
    this.sides = sides;
  }
  roll() {
    return Math.floor(this.sides * Math.random() + 1);
  }
}

//new instance
const blueDice = new Dice1(20);
let result2 = blueDice.roll();
console.log(result2);

// Using constructor function - noDice is just set to undefined without any warning
const noDice = Dice();
noDice;
// undefined

// Using class - an error is thrown
const noDice1 = Dice();
// TypeError: Class constructor Dice cannot be invoked without 'new'

let result3 = blueDice.constructor;
console.log(result3);

const greenDice = new redDice.constructor(10);
//greenDice instanceOf Dice
//<< true
console.log(greenDice);

//static method is called by the class directly rather than by instances of the class.
class Dice2 {
  constructor(sides = 6) {
    this.sides = sides;
  }
  roll() {
    return Math.floor(this.sides * Math.random() + 1);
  }
  static description() {
    return "A way of choosing random numbers";
  }
}

class Turtle {
  constructor(name) {
    this.name = name;
    this.weapon = "hands";
  }
  sayHi() {
    return `Hi dude, my name is ${this.name}`;
  }
  attack() {
    return `Feel the power of my ${this.weapon}!`;
  }
}

const leo = new Turtle("Leonardo");
//<< Turtle { name: 'Leonardo' }
console.log(leo);
console.log(leo.sayHi());
Turtle.prototype;
console.log(Turtle.prototype);

//add new properties
Turtle.prototype.weapon = "Hands";
console.log(Turtle.prototype.weapon);

//add a method
Turtle.prototype.attack = function () {
  return `Feel the power of my ${this.weapon}!`;
};
//<< [Function]
console.log(Turtle.prototype.attack());

//inherit hands
const raph = new Turtle("Raphael");
console.log(raph);

console.log(raph.sayHi());
console.log(raph.weapon);
console.log(raph.attack());

//find the prototype
raph.constructor.prototype;
Object.getPrototypeOf(raph);
raph.__proto__;

const don = new Turtle("Donatello");

Turtle.prototype.weapon = "Feet";
// can't assing feet
console.log(raph.attack());
console.log(leo.attack());

leo.weapon = "Katana Blades";
console.log(leo.attack());

raph.weapon = "Sai";
don.weapon = "Bo Staff";

Turtle.prototype.food = "Pizza";
Turtle.prototype.eat = function () {
  return "Mmm, this ${this.food} tastes great!";
};

const mike = new Turtle("Michelangelo");
console.log(mike.eat());

class Turtle1 {
  constructor(name, color) {
    this.name = name;
    let _color = color;
    this.setColor = (color) => {
      return (_color = color);
    };
    this.getColor = () => _color;
  }
}
raph = new Turtle("Raphael", "Red");
//<< Turtle { name: 'Raphael', setColor: [Function],getColor: [Function] }

//any private properties can only be changed in a controlled way
this.setColor = (color) => {
  if (typeof color === "string") {
    return (_color = color);
  } else {
    throw new Error("Color must be a string");
  }
};

//odd or even
Number.prototype.isEven = function () {
  return this % 2 === 0;
};
Number.prototype.isOdd = function () {
  return this % 2 === 1;
};

//methods that return the first and last items in the array:
Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
};
