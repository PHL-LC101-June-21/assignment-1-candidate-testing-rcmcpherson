const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ");
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i=0; i<questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);
};

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log(`\nCandidate Name: ${candidateName}\n \nFirst question: \nYou answered: ${candidateAnswers[0]} \nThe correct answer is ${correctAnswers[0]}\n \nSecond question: \nYou answered: ${candidateAnswers[1]}\nThe correct answer is ${correctAnswers[1]}\n \nThird question: \nYou answered: ${candidateAnswers[2]}\nThe correct answer is ${correctAnswers[2]}\n \nFourth question: \nYou answered: ${candidateAnswers[3]}\nThe correct answer is ${correctAnswers[3]}\n \nFinal question: \nYou answered: ${candidateAnswers[4]}\nThe correct answer is ${correctAnswers[4]}\n `);

  let grade="";
  let correctNum=0;
  for (i=0;i<questions.length;i++){
    if (correctAnswers[i].toLowerCase==candidateAnswers[i].toLowerCase){
      correctNum++;
    } 
  }
  grade=(correctNum/questions.length)*100;
  if (grade>=80){
    console.log(`Congratulations! You scored ${grade}% on the quiz. You passed!`);
  } else {
    console.log(`Sorry. You scored ${grade}% on the quiz. You need at least 80% to pass. You have failed.`);
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("It's wonderful to meet you,", candidateName+"!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};