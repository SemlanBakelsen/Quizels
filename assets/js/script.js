document.addEventListener("DOMContentLoaded", function() {
    
    startQuiz();

})

/**
 * starts the quiz
 */
function startQuiz() {
    let buttons = document.getElementsByTagName("button");
    document.getElementById('qid').textContent = "What is the worlds tallest building?";

    document.getElementById('c1').textContent = "Merdeka 118";
    document.getElementById('c2').textContent = "Burj Khalifa";
    document.getElementById('c3').textContent = "Shanghai Tower";
    document.getElementById('c4').textContent = "One World Trade Center";

    document.getElementById("aid").textContent = "0";

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

/**
 * runs the secound question
 */
function quizQ2() {
    let buttons = document.getElementsByTagName("button");
    document.getElementById('qid').textContent = "What is the worlds biggest lake?";

    document.getElementById('c1').textContent = "Caspian Sea";
    document.getElementById('c2').textContent = "Victoria Lake";
    document.getElementById('c3').textContent = "Michigan Lake";
    document.getElementById('c4').textContent = "Baikal Lake";

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
    document.getElementById('qid').textContent = "What is the worlds biggest city by population?";

    document.getElementById('c1').textContent = "Delhi";
    document.getElementById('c2').textContent = "Mexico City";
    document.getElementById('c3').textContent = "Tokyo";
    document.getElementById('c4').textContent = "Cairo";

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