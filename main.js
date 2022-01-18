const displayUp = document.getElementById("display-up");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
let actualOperator = 0;
let previousOperator = 0;
let operation = undefined;

function numberButtons() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      addNumber(number.value);
    });
  });
}

function operatorButtons() {
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      selectOperation(operator.value);
    });
  });
}

function showResult() {
  equalButton.addEventListener("click", () => {
    calculate();
    updateDisplay();
  });
}

function clearDisplay() {
  clearButton.addEventListener("click", () => {
    clear();
    updateDisplay();
  });
}

function addNumber(number) {
  if (actualOperator !== 0) {
    actualOperator = actualOperator.toString() + number.toString();
  } else {
    actualOperator = number.toString();
  }
  updateDisplay();
}

function selectOperation(operatorValue) {
  if (actualOperator === "") return;
  if (previousOperator !== "") {
    calculate();
  }
  operation = operatorValue.toString();
  previousOperator = actualOperator;
  actualOperator = "";
}

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return secondNumber - firstNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return secondNumber / firstNumber;
}

function calculate() {
  let result = 0;
  const firstNumber = parseFloat(actualOperator);
  const secondNumber = parseFloat(previousOperator);
  if (operation === "+") {
    result = add(firstNumber, secondNumber);
  } else if (operation === "-") {
    result = subtract(firstNumber, secondNumber);
  } else if (operation === "*") {
    result = multiply(firstNumber, secondNumber);
  } else if (operation === "/") {
    result = divide(firstNumber, secondNumber);
  }
  actualOperator = result;
  operation = undefined;
  previousOperator = "";
}

function updateDisplay() {
  displayUp.textContent = actualOperator;
}

function clear() {
  actualOperator = 0;
  previousOperator = "";
  operation = undefined;
}

function start() {
  clear();
  numberButtons();
  operatorButtons();
  showResult();
  clearDisplay();
  calculate();
}

start();
