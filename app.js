var questions = [
  new Question(
    "What is the sum of 10 and 15",
    ["20", "30", "25", "35"],
    "25"
  ),
  new Question(
    "What is the product of 2 and 8",
    ["11", "13", "16", "18"],
    "16"
  ),
  new Question(
    "What is the capital of India",
    ["NewDelhi", "Oslo", "Norway", "Helsinik"],
    "NewDelhi"
  ),
  new Question(
    "What is 2 times 2",
    ["4", "5", "6", "7"],
    "4"
  )
];

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //showQuestion
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    //showChoices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; ++i) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      Guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}

function Guess(id, guesses) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guesses);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + "of" + quiz.questions.length;
  console.log(quiz.score);
}

function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += '<h2 id="score">Your Score:' + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

var quiz = new Quiz(questions);

populate();
