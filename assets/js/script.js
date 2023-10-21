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
    },
    {
        question: "What is the world's longest mountain range?",
        options: ["Andes", "Rocky Mountains", "Great Dividing Range", "Mid-Ocean Ridge"],
        correctIndex: 3
    },
    {
        question: "What is the tallest living species of tree on Earth?",
        options: ["Giant Sequoia", "Douglas Fir", "Sitka Spruce", "Coast Redwood"],
        correctIndex: 3
    },
    {
        question: "Which plant is known to have the largest leaves in the world?",
        options: ["Banana Plant", "Elephant Ear Plant", "Giant Water Lily", "Fern"],
        correctIndex: 0
    },
    {
        question: "Which desert holds the title for being the largest hot desert in the world?",
        options: ["Mojave Desert", "Sahara Desert", "Gobi Desert", "Arabian Desert"],
        correctIndex: 1
    },
    {
        question: "Which continent is home to the largest rainforest in the world?",
        options: ["Africa", "Asia", "South America", "Australia"],
        correctIndex: 2
    },
    {
        question: "Which plateau is considered the largest in terms of area?",
        options: ["Colorado Plateau", "Deccan Plateau", "Tibetan Plateau", "Columbia Plateau"],
        correctIndex: 1
    },
    {
        question: "Which river is the longest in the world?",
        options: ["Amazon River", "Yangtze River", "Mississippi River", "Nile River"],
        correctIndex: 3
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

    document.getElementsByClassName("score")[0].textContent = "Score:";
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
 * remove event listener of buttons and add reset button
 */
function end() {
    document.getElementById('qid').textContent = "You have completed the quiz!";
    clearOptions();
    document.getElementById("aid").textContent = score + " / 10";
    document.getElementsByClassName("score")[0].textContent = "Total score:";

    //removing the event listener for the buttons
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.removeEventListener("click", Answer);
    }

    //Add a new event listener to the first button
    let restartButton = document.getElementById("c1");
    restartButton.addEventListener("click", restartQuiz);

    //add text to the reset button
    document.getElementById("c1").textContent = "Click to retake quiz.";

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

//
function restartQuiz() {


}