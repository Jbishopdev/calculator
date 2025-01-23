function add (a, b){
  let a = a;
  let b = b;
  let operator = "+";
  return a + b;
}

function subtract (a, b){
  let a = a;
  let b = b;
  let operator = "-";
  return a - b;
}

function multiply(a, b) {
  let a = a;
  let b = b;
  let operator = "*";
  return a * b;
}

function divide(a, b) {
  let a = a;
  let b = b;
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