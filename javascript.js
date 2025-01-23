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