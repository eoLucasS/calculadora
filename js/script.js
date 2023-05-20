function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastCharacter() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function appendCharacter(character) {
    document.getElementById('result').value += character;
}

function calculateResult() {
    var result = document.getElementById('result').value;
    var calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;

    // Registro do histórico
    var historyItem = {
        timestamp: new Date(),
        calculation: result,
        result: calculatedResult
    };

    addToHistory(historyItem);
}

function clearHistory() {
    var historyList = document.getElementById('calc-history');
    historyList.innerHTML = '';
}

function addToHistory(item) {
    var historyList = document.getElementById('calc-history');

    var li = document.createElement('li');

    var timestamp = document.createElement('div');
    timestamp.classList.add('timestamp');
    timestamp.textContent = getFormattedTimestamp(item.timestamp);

    var calculation = document.createElement('div');
    calculation.classList.add('calculation');
    calculation.textContent = item.calculation;

    var result = document.createElement('div');
    result.classList.add('result');
    result.textContent = item.result;

    li.appendChild(timestamp);
    li.appendChild(calculation);
    li.appendChild(result);

    historyList.appendChild(li);
}

function getFormattedTimestamp(timestamp) {
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'America/Sao_Paulo'
    };

    return timestamp.toLocaleString('pt-BR', options);
}
