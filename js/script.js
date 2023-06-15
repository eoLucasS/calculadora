var expression = "";
var resultField = document.getElementById("result");
var historyContainer = document.getElementById("historyContainer");

function updateResult(value) {
    expression += value;
    resultField.value = expression;
}

function clearResult() {
    expression = "";
    resultField.value = "";
}

function calculateResult() {
    try {
        var result = eval(expression);
        resultField.value = result.toLocaleString("en");

        var currentDate = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        var historyItem = document.createElement("div");
        historyItem.className = "history-item";
        historyItem.innerHTML = '<span>' + currentDate + '</span> - <span class="calculation">' + expression + '</span> = ' + result.toLocaleString("en");
        historyContainer.appendChild(historyItem);

        expression = "";
    } catch (error) {
        resultField.value = "Erro";
    }
}

function clearHistory() {
    historyContainer.innerHTML = "";
}

function removeLastCharacter() {
    expression = expression.slice(0, -1);
    resultField.value = expression;
}
