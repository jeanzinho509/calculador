let currentResult = '';

function appendNumber(number) {
  currentResult += number;
  updateResult();
}

function appendOperator(operator) {
  currentResult += operator;
  updateResult();
}

function clearResult() {
  currentResult = '';
  updateResult();
}

function calculateResult() {
    try {
      currentResult = eval(currentResult);
      if (isNaN(currentResult) || !isFinite(currentResult)) {
        currentResult = 'Indefinido';
      }
      updateResult();
    } catch (error) {
      currentResult = 'Error';
      updateResult();
    }
  }

function updateResult() {
  document.getElementById('result').value = currentResult;
}
