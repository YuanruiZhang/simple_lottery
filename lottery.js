'use strict';

//set-up
let questionList = ["question1", "question2", "question3"]
let currentQuestion = 0;
let answerList = ["a","b","c"];
let timer = null;
let runLottery = true;

let question = document.getElementById("question");
question.innerHTML = questionList[0];
document.getElementById("nextQuestion").addEventListener("click",function(){
    currentQuestion = currentQuestion + 1; 
    if(currentQuestion < questionList.length){
        question.innerHTML = questionList[currentQuestion];
}else{
    clearInterval(timer);
    document.getElementsByClassName("questionForm")[0].innerHTML="";
    document.getElementsByClassName("answerForm")[0].innerHTML="You finished!"
    document.getElementsByClassName("button")[0].innerHTML="";
}
});

let begin = document.getElementById("begin");


// random selection logic credits to author "懒人原生" http://www.lanrenzhijia.com/js/4413.html
begin.addEventListener("click",function(){
        if(runLottery){
        runLottery = false;
        begin.innerHTML = "Stop";
        begin.classList.remove("btn-success");
        begin.classList.add("btn-danger");
            //clean the timer
		clearInterval(timer);
		//define the timer
		timer=setInterval(function(){
			//Math.random()get number between 0-1, times data length, and round to floor;
			var random=Math.floor(Math.random()*answerList.length); //floor去取整
			//write in the answerList
			document.getElementById("answer").innerHTML=answerList[random];
		},50);
    }else{
        runLottery = true;
        begin.innerHTML = "Begin"
        begin.classList.remove("btn-danger");
        begin.classList.add("btn-success");
        clearInterval(timer);
    }
        }
    );

