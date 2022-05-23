const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a__text = document.getElementById("a-text");
const b__text = document.getElementById("b-text");
const c__text = document.getElementById("c-text");
const d__text = document.getElementById("d-text");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];

    questionElement.innerText = currentQuizData.question;
    a__text.innerText = currentQuizData.a;
    b__text.innerText = currentQuizData.b;
    c__text.innerText = currentQuizData.c;
    d__text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerElements.forEach(answerElement => {
        answerElement.checked = false;
    });
}

function getSelected() {
    let answer;
    answerElements.forEach(answerElement => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer;
}

submitButton.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered  at ${score}
                /${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


