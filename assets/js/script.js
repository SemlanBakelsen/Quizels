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
        button.addEventListener("click", Answer);
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
    const correctAnswers = [
        [false, true, false, false], //correct answer for question 1: button 2
        [true, false, false, false], //correct answer for question 1: button 1
        [false, false, true, false] //correct answer for question 1: button 3
    ];

    //will be set to the button pressed by the user
    const selectedAnswerIndex = Array.from(document.querySelectorAll('.btn')).indexOf(this);

    //adds to the score if the button clicked matches the correct answer Array
    if (correctAnswers[questionCounter - 1][selectedAnswerIndex]) {
        scoreAdd();
    }

    //go to next question
    if (questionCounter === 1) {
        quizQ2  ();
    }
    else if (questionCounter === 2) {
        quizQ3();
    }
    else if (questionCounter === 3) {
        end();
    }

}

/**
 * runs the second question
 */
function quizQ2() {
    questionCounter++;
    setupQuestion("What is the worlds biggest lake?", ["Caspian Sea", "Victoria Lake", "Michigan Lake", "Baikal Lake"]);
}

/**
 * starts third question
 */
function quizQ3() {
questionCounter++;
    setupQuestion("What is the worlds biggest city by population?", ["Delhi", "Mexico City", "Tokyo", "Cairo"]);
}

/**
 * end of quiz, displays the total score
 */
function end() {
    document.getElementById('qid').textContent = "You have completed the quiz";
    clearOptions();
}

//will set all option buttons text to ""
function clearOptions() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.textContent = "";
    }
}

//increases the score
function scoreAdd() {
    score++;
    document.getElementById("aid").textContent = score;
}