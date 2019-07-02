
(function () {
  console.clear();
  // STEP 1
  // Build a function constructor called Question to describe the question. A question should include
  // a) the question itself
  // b) the answers from which the player can choose( use an array, obj, etc)
  // c) the correct answer (use a number)

  function Question(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }

  // STEP 2
  // Create new objects using the constructor

  const quest1 = new Question(
    'Is Javascript the best language?',
    ['yes', 'no', 'maybe', 'sometimes'],
    0,
  );

  const quest2 = new Question(
    'How many hours of sleep do you need?',
    ['As much as possible.', 'Eleventeen', '24 hrs/day', '6+ hrs is good'],
    3,
  );

  const quest3 = new Question(
    'Are you getting better at constructors?',
    ['Not even close.', 'Hopefully.', 'I quit!', 'For sure!'],
    3,
  );

  const quest4 = new Question(
    'Fly me to the moon...',
    ['and watch from a distance.', 'and leave me be.', 'and let me sing upon the stars.', '...I have no clue...'],
    2,
  );


  // STEP 3 
  // Store objects innto an array
  const myQuiz = [quest1, quest2, quest3, quest4];


  // STEP 4
  // Select a random question and console.log it w/ answer. Use a prototype

  // This is a prototype for the constructor above
  Question.prototype.randomQuestion = function () {
    // Show the question
    console.log(this.question);
    // Show the choices
    for (let i = 0; i < this.choices.length; i++) {
      console.log(i + 1 + ': ' + this.choices[i]);
    }
  };

  // Select random quiz question
  let randQ = Math.floor(Math.random() * myQuiz.length);
  myQuiz[randQ].randomQuestion();


  // STEP 5
  // Use prompt to ask user for answer. User should input the answer in prompt according to Step 4
  let userAnswer = prompt("Please select the correct answer (just type the number).", "");

  // STEP 6
  // Use a method to alert the user in the console if they are correct or not.
  Question.prototype.correctAnswer = function () {
    if (Number(userAnswer) === (myQuiz[randQ].answer + 1)) {
      console.log('You answered - ' + userAnswer + ': ' + myQuiz[randQ].choices[userAnswer - 1]);
      console.log('You got it right!');
    } else if (userAnswer === null || myQuiz[randQ].choices[userAnswer - 1] === undefined) {
      console.log('Reload (F5) to play again.');
    } else {
      console.log('You answered - ' + userAnswer + ': ' + myQuiz[randQ].choices[userAnswer - 1]);
      console.log('Sorry, wrong annswer...');
      console.log(`Correct answer is ${myQuiz[randQ].answer + 1}`);
    }
  }

  myQuiz[randQ].correctAnswer();
})();