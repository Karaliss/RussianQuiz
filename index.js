const questionList = [
    { question: "Аа", answer: "A" },
    { question: "Бб", answer: "B" },
    { question: "Вв", answer: "V" },
    { question: "Гг", answer: "G" },
    { question: "Дд", answer: "D" },
    { question: "Ее", answer: "E" },
    { question: "Ёё", answer: "Yo" },
    { question: "Жж", answer: "zh" },
    { question: "Зз", answer: "z" },
    { question: "Ии", answer: "i" },
    { question: "Йй", answer: "Y" },
    { question: "Кк", answer: "K" },
    { question: "Лл", answer: "L" },
    { question: "Мм", answer: "M" },
    { question: "Нн", answer: "N" },
    { question: "Оо", answer: "O" },
    { question: "Пп", answer: "P" },
    { question: "Рр", answer: "R" },
    { question: "Сс", answer: "S" },
    { question: "Тт", answer: "T" },
    { question: "Уу", answer: "oo" },
    { question: "Фф", answer: "F" },
    { question: "Хх", answer: "H" },
    { question: "Цц", answer: "Ts" },
    { question: "Чч", answer: "Ch" },
    { question: "Шш", answer: "Sh" },
    { question: "Яя", answer: "Ya" },
]

const currentLetter = document.getElementById("currentLetter")
const errorMsg = document.getElementById("errMsg")

let currentQuestion = null

function nextQuestion() {
    const randomIndex = Math.floor(Math.random() * questionList.length);
    currentQuestion = questionList[randomIndex];
    currentLetter.textContent = currentQuestion.question;
}

function borderColor(color) {
    const questionContainer = document.getElementById("letterContainer")

    questionContainer.style.borderColor = color
    setTimeout(function(){
        questionContainer.style.borderColor = "#ffffff"
    }, 500);
}

window.onload = function () {
    nextQuestion()
}

function checkAnswer() {
    const userInput = document.getElementById("usrInput")
    const answerInput = userInput.value.trim()
    if (answerInput.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        borderColor("#67e672")
        userInput.value = ""
        nextQuestion()
    } else {
        borderColor("#ff383f")
        userInput.value = ""
        nextQuestion()
    }
}

function emptyField() {
    const answerInput = document.getElementById("usrInput").value.trim()

    if (answerInput === "") {
        errorMsg.textContent = "Input field is empty!"
        setTimeout(function(){
            errorMsg.textContent = ""
        }, 2000);
    } else {
        checkAnswer()
    }
}