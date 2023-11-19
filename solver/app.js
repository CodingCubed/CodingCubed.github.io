const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const submitButton = document.getElementById("submit");

function submit() {
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);
    outputField.value = eval(inputFieldValue);
}

submitButton.addEventListener("click", submit);