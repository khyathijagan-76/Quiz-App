const quizData = [
  {
    question: "Which chemical element has the atomic number 11?",
    a: "Sodium",
    b: "Magnesium",
    c: "Aluminum",
    d: "Nickel",
    correct: "a",
  },
  {
    question: "In what year did the Titanic sink?",
    a: "1902",
    b: "1905",
    c: "1912",
    d: "1920",
    correct: "c",
  },
  {
    question: "What is the largest planet in our solar system?",
    a: "Earth",
    b: "Jupiter",
    c: "Saturn",
    d: "Neptune",
    correct: "b",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    a: "Charles Dickens",
    b: "Jane Austen",
    c: "William Shakespeare",
    d: "Mark Twain",
    correct: "c",
  },
  {
    question: "What is the capital city of Canada?",
    a: "Toronto",
    b: "Ottawa",
    c: "Montreal",
    d: "Vancouver",
    correct: "b",
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    a: "Spanish",
    b: "Portuguese",
    c: "French",
    d: "English",
    correct: "b",
  },
  {
    question: "What is H2O more commonly known as?",
    a: "Salt",
    b: "Hydrogen peroxide",
    c: "Water",
    d: "Ammonia",
    correct: "c",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Venus",
    b: "Mars",
    c: "Mercury",
    d: "Jupiter",
    correct: "b",
  },
  {
    question: "What is the process by which plants make food using sunlight?",
    a: "Respiration",
    b: "Transpiration",
    c: "Photosynthesis",
    d: "Digestion",
    correct: "c",
  },
  {
    question: "Who painted the Mona Lisa?",
    a: "Michelangelo",
    b: "Vincent van Gogh",
    c: "Pablo Picasso",
    d: "Leonardo da Vinci",
    correct: "d",
  }
];


const quiz = document.querySelector('.quiz');
const answersAll = document.querySelectorAll('.answer');
const question = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submit = document.querySelector('#submit');

let current = 0;
let score = 0;

loadQuiz();

function deselectAnswers(){
    answersAll.forEach(el => el.checked = false);
}

function loadQuiz(){
    deselectAnswers();

    const currentQuizdata = quizData[current];

    question.innerText = currentQuizdata.question;
    a_text.innerText = currentQuizdata.a;
    b_text.innerText = currentQuizdata.b;
    c_text.innerText = currentQuizdata.c;
    d_text.innerText = currentQuizdata.d;

}

function getSelected() {
    let answer;
    answersAll.forEach((el) => {
        if (el.checked) {
            answer = el.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === quizData[current].correct){
            score++;
        }

        current++;

        if (current < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = 
            `<h2>You score is ${score} out of ${quizData.length} quesions</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});