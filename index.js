const process = require("process");
const { determineMyFortune } = require("./src/eightball");

const [, , ...questionParts] = process.argv;
const question = questionParts.join(" ");
if (!question) {
  console.log(
    "No question kemosabe? Alright we will proceed to answer you anyway."
  );
} else {
  console.log(`You asked: ${question}`);
}

const answer = determineMyFortune(question);
console.log(answer);
