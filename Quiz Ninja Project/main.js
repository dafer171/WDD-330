/*
alert("Welcome to Quiz Ninja!");

const question = "What is Superman's real name?";
const answer = prompt(question);
alert(`You answered ${answer}`);

const quiz = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Wonder Woman's real name?", "Diana Prince"],
  ["What is Batman's real name?", "Bruce Wayne"],
];

let score = 0; // initialize score

for (const [question, answer] of quiz) {
  const response = prompt(question);
  if (response === answer) {
    alert("Correct!");
    score++;
  } else {
    alert(`Wrong! The correct answer was ${answer}`);
  }
}

// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? "s" : ""}`);
*/

const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diana Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
];

const questions = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Wonder Woman's real name?", "Diana Prince"],
  ["What is Batman's real name?", "Bruce Wayne"],
];

const game = {
  start(quiz) {
    this.questions = [...quiz];
    this.score = 0;
    // main game loop
    for (const question of this.questions) {
      this.question = question;
      this.ask();
    }
    // end of main game loop
    this.gameOver();
  },
  ask() {
    const question = `What is ${this.question.name}'s real name?`;
    const response = prompt(question);
    this.check(response);
  },
  check(response) {
    const answer = this.question.realName;
    if (response === answer) {
      alert("Correct!");
      this.score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  },
  gameOver() {
    alert(
      `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`
    );
  },
};

/*
function start(quiz) {
  let score = 0;
  // main game loop
  for (const [question, answer] of quiz) {
    const response = ask(question);
    check(response, answer);
  }
  // end of main game loop
  gameOver();
  // function declarations
  function ask(question) {
    return prompt(question);
  }
  function check(response, answer) {
    if (response === answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  }
  function gameOver() {
    alert(`Game Over, you scored ${score} point${score !== 1 ? "s" : ""}`);
  }
}
start(quiz);
*/
