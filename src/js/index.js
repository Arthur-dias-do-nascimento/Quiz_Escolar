import { array_questions } from "./questions.js";

// Elementos HTML

const btn_start_quiz_escolar = document.querySelector(".btn-start-quiz-escolar");
const btn_confirm_question = document.querySelector(".btn-confirm-question");
const btn_next_question = document.querySelector(".btn-next-question");
const btn_repeat_quiz_escolar = document.querySelector(".btn-repeat-quiz-escolar");

const btn_materias = [...document.querySelectorAll(".btn-materia")];

const number_question = document.querySelector("#number-question");
const question = document.querySelector("#question");

const respostas = [...document.querySelectorAll(".resposta")];
const input_radio = [...document.querySelectorAll("input[type=radio]")];

const result_pontuacao = document.querySelector("#result-pontuacao");
const pontuacao = document.querySelector("#pontuacao");

const messagem = document.querySelector("#messagem");

const sections = [...document.querySelectorAll(".container")];

// Variaveis

let pontos = 0;
let index = 0;
let materia = "";
let array_questions_filtered = [];

// Eventos

btn_start_quiz_escolar.addEventListener("click", ShowQuizEscolar);

btn_materias.forEach((element) => element.addEventListener("click", HeadleClickButtonGetMateria));

btn_confirm_question.addEventListener("click", DisplayCorrectQuestion);
btn_next_question.addEventListener("click", DisplayQuestion);

btn_repeat_quiz_escolar.addEventListener("click", () => {
    location.reload();
})

// Funções

// Funções de hidden e show/display

function ShowQuizEscolar() {
    sections[0].classList.add("hidden");

    sections[1].classList.remove("hidden");
}

function ShowQuestionsQuizEscolar() {
    sections[1].classList.add("hidden");

    sections[2].classList.remove("hidden");
}

function ShowPontuacaoQuizEscolar() {
    sections[2].classList.add("hidden");

    sections[3].classList.remove("hidden");
}

function DisplayButtonsConfirmQuestion() {
    btn_confirm_question.classList.remove("btn-hidden");

    btn_next_question.classList.add("btn-hidden");
}

function DisplayButtonsNextQuestion() {
    btn_next_question.classList.remove("btn-hidden");

    btn_confirm_question.classList.add("btn-hidden");
}

// Funções para o programa funcionar

// Funções externas:

function HeadleClickButtonGetMateria(event) {
    materia = event.target.id;

    array_questions_filtered = GetArrayQuestions(materia); // Armazenar o array filtrado
    index = 0; // Reiniciar o índice
    pontos = 0; // Reiniciar os pontos

    ShowQuestionsQuizEscolar();
    DisplayQuestion();
}

function DisplayQuestion() {
    DisplayButtonsConfirmQuestion();

    if (index < 0) {
        console.error("Index is out of bounds or not defined");

        return;
    } else if (index >= array_questions_filtered.length) {
        ShowPontuacaoQuizEscolar();
        Pontuacao();

        document.body.style.backgroundColor = "#87C7F6";
    }

    let currentQuestion = array_questions_filtered[index];

    if (!currentQuestion) {
        return;
    }

    question.textContent = currentQuestion.question;
    number_question.textContent = currentQuestion.number_question;

    let answers = currentQuestion.answers;
    for (let $x = 0; $x < answers.length; $x++) {
        if (respostas[$x] && input_radio[$x]) {
            respostas[$x].textContent = answers[$x].text;

            input_radio[$x].dataset.correct = answers[$x].correct;
        } else {
            console.error("Response or input_radio element is not defined at index " + $x);
        }
    }

    document.body.style.backgroundColor = "#87C7F6";

    for (let $x = 0; $x < input_radio.length; $x++) {
        input_radio[$x].style.accentColor = "#1E1E1E";
    }
}

function DisplayCorrectQuestion() {
    let correctAnswerFound = false;

    for (let $x = 0; $x < input_radio.length; $x++) {
        if (input_radio[$x].checked && input_radio[$x].dataset.correct == "true") {
            input_radio[$x].style.accentColor = "#34C759";

            pontos += 10;
            correctAnswerFound = true;
        } else {
            input_radio[$x].style.accentColor = "#FF0000";
        }
    }

    if (correctAnswerFound) {
        document.body.style.backgroundColor = "#34C759";
    } else {
        document.body.style.backgroundColor = "#FF0000";
    }

    DisplayButtonsNextQuestion();

    index += 1; // Incrementar o índice após verificar a resposta
}

// Funções internas:

function GetArrayQuestions(materia) {
    const element = array_questions.find((element) => element.materia === materia);

    return element ? element.questions : [];
}

function Pontuacao() {
    pontuacao.textContent = `${pontos} pontos de 100.`;
    messagem.textContent = `Você acertou ${pontos / 10} de 10 questões!`;

    switch (pontos) {
        case 0:
            result_pontuacao.textContent = "-100QI...";
        break;

        case 10:
            result_pontuacao.textContent = "Foi ruim :(";
        break;

        case 20:
            result_pontuacao.textContent = "Foi um pouco ruim.";
        break;

        case 30:
            result_pontuacao.textContent = "Da pra melhorar...";
        break;

        case 40:
            result_pontuacao.textContent = "Continue melhorando!";
        break;

        case 50:
            result_pontuacao.textContent = "Foi bom!";
        break;

        case 60:
            result_pontuacao.textContent = "Foi muito bom!";
        break;

        case 70:
            result_pontuacao.textContent = "impressionante!";
        break;

        case 80:
            result_pontuacao.textContent = "Exelente!!!";
        break;

        case 90:
            result_pontuacao.textContent = "Incrivel!!!";
        break;

        case 100:
            result_pontuacao.textContent = "Você é o proximo Albert Einstein!";
        break;
    }
}