const displayBottom = document.querySelector("#display-bottom");
const displayTop = document.querySelector("#display-top");
const numberButton = document.querySelectorAll(".num");
const operatorButton = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
let isAppending = false; // True if appending numbers, false if starting a new input
let currentOperation = null; // Stores the selected operation
let previousNumber = null; // To store the first operand
let currentNumber = null;

displayBottom.textContent = "0";

function handleNumberClick(number) {
  if (!isAppending) {
    displayBottom.textContent = number; // Replace screen content for a new input
    isAppending = true; // Start appending again after a reset

  } else {
    displayBottom.textContent += number; // Append to current input
  }
  currentNumber = number;
}

function handleOperationClick(operation) {
  previousNumber = displayBottom.textContent; // Store the number on the screen
  currentOperation = operation; // Save the selected operation
  isAppending = false; // Indicate that the next input will overwrite the screen
}

operatorButton.forEach ((button) => {
  button.addEventListener('click', () => { 
    handleOperationClick(button.textContent)
  });
  button.addEventListener("click", () => {
    populateUpperDisplay(button.textContent);
  })
})


numberButton.forEach ((button) => {
  button.addEventListener('click', () => {
    handleNumberClick(button.textContent)
});
});

function add (a, b){
  let num1 = a;
  let num2 = b;
  let operator = "+";
  return num1 + num2;
}

function subtract (a, b){
  let num1 = a;
  let num2 = b;
  let operator = "-";
  return num1 - num2;
}

function multiply(a, b) {
  let num1 = a;
  let num2 = b;
  let operator = "*";
  return num1 * num2;
}

function divide(a, b) {
  let num1 = a;
  let num2 = b;
  let operator = "/";
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
    default:
      console.log("Invalid operator");
  }
}

function populateLowerDisplay(item) {
  let num = item;
  displayBottom.textContent = displayBottom.textContent + num;
}

function populateUpperDisplay(item) {
  let operator = item;
  displayTop.textContent = displayBottom.textContent +  " " + operator;
}

clear.addEventListener("click", () => {
  isAppending = false;
  currentOperation = null;
  previousNumber = null;
  currentNumber = null;
  displayBottom.textContent = "0";
  displayTop.textContent = "";
})