document.addEventListener("DOMContentLoaded", function() {
    
    startQuiz();

})

//set score to a base value
let score = 0;

//keeps track of the current question
let questionCounter = 0;

/**
 * starts the quiz
 */
function startQuiz() {
    let buttons = document.getElementsByTagName("button");

    document.getElementById("aid").textContent = "0";

    setupQuestion("What is the worlds tallest building?", ["Merdeka 118", "Burj Khalifa", "Shanghai Tower", "One World Trade Center"]);
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("id") === "c1"){
                quizQ2();
            } else if (this.getAttribute("id") === "c2"){
                
                scoreAdd();
                
                quizQ2();//correct answer
            } else if (this.getAttribute("id") === "c3"){
                quizQ2();
            } else {
                quizQ2();
            }
        })
    }
}

//sets the first questions
function setupQuestion(questionText, options) {
    let buttons = document.getElementsByTagName("button");
    document.getElementById('qid').textContent = questionText;

    //Will set the text of the questions looping thru the elements
    for (let i=0; i < buttons.length; i++) {
        buttons[i].textContent = options[i];
    }
}

function Answer() {
    const correctAnswers = [];

    const selectedAnswerIndex = Array.from(document.querySelectorAll('.btn')).indexOf(this);

    if (correctAnswers[questionCounter - 1][selectedAnswerIndex]) {
        //add score
    }

    //go to next question
    if () {
        //question 2
    }
    else if () {
        //question 3
    }
    else if () {
        //end
    }

}

/**
 * runs the second question
 */
function quizQ2() {
    let buttons = document.getElementsByTagName("button");

    setupQuestion("What is the worlds biggest lake?", ["Caspian Sea", "Victoria Lake", "Michigan Lake", "Baikal Lake"]);

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("id") === "c1"){
                
                scoreAdd();
                
                quizQ3();//correct answer
            } else if (this.getAttribute("id") === "c2"){
                quizQ3();
            } else if (this.getAttribute("id") === "c3"){
                quizQ3();
            } else {
                quizQ3();
            }
        })
    }
}

/**
 * starts third question
 */
function quizQ3() {
    let buttons = document.getElementsByTagName("button");

    setupQuestion("What is the worlds biggest city by population?", ["Delhi", "Mexico City", "Tokyo", "Cairo"])

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("id") === "c1"){
                end();
            } else if (this.getAttribute("id") === "c2"){
                end();
            } else if (this.getAttribute("id") === "c3"){
                
                scoreAdd();
                
                end();//correct answer
            } else {
                end();
            }
        })
    }
}

/**
 * end of quiz, displays the total score
 */
function end() {
    document.getElementById('qid').textContent = "You have completed the quiz";

    document.getElementById('c1').textContent = "";
    document.getElementById('c2').textContent = "";
    document.getElementById('c3').textContent = "";
    document.getElementById('c4').textContent = "";

}

function scoreAdd() {
    let oldScore = parseInt(document.getElementById("aid").textContent);
    document.getElementById("aid").textContent = oldScore + 1;
}