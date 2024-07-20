let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function inputNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    display.value = currentInput;
}

function inputOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result;
    previousInput = '';
    operator = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    previousInput = '';
}

function toggleSign() {
    if (currentInput === '') return;
    currentInput = currentInput.startsWith('-') ? currentInput.slice(1) : '-' + currentInput;
    display.value = currentInput;
}

function percent() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    display.value = currentInput;
}

var authorImage = document.querySelector(".author-image");
authorImage.addEventListener("click", function () {
    window.open("https://bit.ly/43AxN7w", "_blank");
});

var authorName = document.querySelector(".author-name");
authorName.addEventListener("click", function () {
    window.open("https://bit.ly/43AxN7w", "_blank");
});