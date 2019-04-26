"use strict";

//set-up
let questionList = [
  "Which form of sales is simply selling things the way things have been sold in the past?",
  "Which country had the first person in space?",
  "Which form of sales is simply selling what user information you’ve acquired?",
  "Which country had the third person in space?",
  "Which form of sales is simply selling things to businesses and not individual consumers?"
];
let currentQuestion = 0;
let answerList = [
  "Selling stuff",
  "Soviet Union",
  "Selling data",
  "China",
  "Selling to businesses"
];
let timer = null;
let runLottery = true;
let answerForm = document.getElementsByClassName("answerForm")[0];
let startTimer = false;
let secondCount = null;

let question = document.getElementById("question");
question.innerHTML = questionList[0];
document.getElementById("nextQuestion").addEventListener("click", function() {
  currentQuestion = currentQuestion + 1;
  if (currentQuestion < questionList.length) {
    question.innerHTML = questionList[currentQuestion];
    document.getElementById("nextQuestion").classList.remove("greenCol");
    document.getElementById("nextQuestion").disabled = true;
    answerForm.classList.remove("greenCol");
  } else {
    clearInterval(timer);
    clearInterval(secondCount);
    document.getElementsByClassName("questionForm")[0].innerHTML = "";
    answerForm.innerHTML = "You finished!";
    document.getElementsByClassName("button")[0].innerHTML = "";
  }
});

let begin = document.getElementById("begin");
let i = 0;
// random selection logic credits to author "懒人原生" http://www.lanrenzhijia.com/js/4413.html
begin.addEventListener("click", function() {
  if (runLottery) {
    if (!startTimer) {
      startTimer = !startTimer;
      secondCount = setInterval(function() {
        document.getElementById("secondCount").innerText = i;
        i++;
      }, 1000);
    }
    answerForm.classList.remove("redCol");
    answerForm.classList.remove("greenCol");
    runLottery = false;
    begin.innerHTML = "Stop";
    begin.classList.remove("btn-success");
    begin.classList.add("btn-danger");
    //clean the timer
    clearInterval(timer);
    //define the timer
    timer = setInterval(function() {
      //Math.random()get number between 0-1, times data length, and round to floor;
      var random = Math.floor(Math.random() * answerList.length); //floor去取整
      //write in the answerList
      document.getElementById("answer").innerHTML = answerList[random];
    }, 500);
  } else {
    runLottery = true;
    begin.innerHTML = "Begin";
    begin.classList.remove("btn-danger");
    begin.classList.add("btn-success");
    clearInterval(timer);
    let currentAnswer = document.getElementById("answer").innerHTML;
    if (answerList.indexOf(currentAnswer) == currentQuestion) {
      answerForm.classList.add("greenCol");
      answerForm.classList.remove("redCol");
      document.getElementById("nextQuestion").classList.add("greenCol");
      document.getElementById("nextQuestion").disabled = false;
    } else if (answerList.includes(currentAnswer)) {
      answerForm.classList.add("redCol");
      answerForm.classList.remove("greenCol");
    }
  }
});
