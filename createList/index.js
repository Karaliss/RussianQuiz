const question = document.getElementById("questions")
const answer = document.getElementById("answers")

const output = document.getElementById("outputText")
const errorMsg = document.getElementById("errorMsg")

function addToList() {
    const questionValue = question.value
    const answerValue = answer.value

    if (questionValue !== "" && answerValue !== "") {
        output.innerHTML += `{ question: "${questionValue}", answer: "${answerValue}" },<br>`
        
        question.value = ""
        answer.value = ""
        errorMsg.textContent = ""
    } else {
        errorMsg.textContent = "Question or answer field is empty!"
    }
}

function clearText() {
    output.textContent = ""
}