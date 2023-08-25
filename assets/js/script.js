document.addEventListener("DOMContentLoaded", function() {
    
    startQuiz();

})

//set score to a base value
let score = 0;

//keeps track of the current question
let questionCounter = 0;

//all questions, options, and its answers
const questions = [
    {
        question: "What is the world's tallest building?",
        options: ["Merdeka 118", "Burj Khalifa", "Shanghai Tower", "One World Trade Center"],
        correctIndex: 1
    },
    {
        question: "What is the world's biggest lake?",
        options: ["Caspian Sea", "Victoria Lake", "Michigan Lake", "Baikal Lake"],
        correctIndex: 0
    },
    {
        question: "What is the world's biggest city by population?",
        options: ["Delhi", "Mexico City", "Tokyo", "Cairo"],
        correctIndex: 2
    }
    ];

/**
 * starts the quiz
 * adds eventListener to the buttons, and running Answer function on clicking the buttons
 */
function startQuiz() {
    let buttons = document.getElementsByTagName("button");

    document.getElementById("aid").textContent = "0";
    setupQuestion(questions[questionCounter]);

    for (let button of buttons) {
        button.addEventListener("click", Answer);
    }
}

//sets up the questions, title and button text
function setupQuestion(currentQuestion) {
    let buttons = document.getElementsByTagName("button");
    document.getElementById('qid').textContent = currentQuestion.question;

    //Will set the text of the questions looping thru the elements
    for (let i = 0; i < buttons.length; i++) {
         buttons[i].textContent = currentQuestion.options[i];
    }
}


//function to determine if the user clicked on the correct answer, if they did run teh scoreAdd function
function Answer() {
    const currentQuestion = questions[questionCounter];

    //will be set to the button pressed by the user
    const selectedAnswerIndex = Array.from(document.querySelectorAll('.btn')).indexOf(this);

    //adds to the score if the button clicked matches the correct answer Array
    if (selectedAnswerIndex === currentQuestion.correctIndex) {
        scoreAdd();
    }

    questionCounter++;

    //setup the next questions
    if (questionCounter < questions.length) {
        setupQuestion(questions[questionCounter]);
    } else {
        end();
    }
}

/**
 * end of quiz
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