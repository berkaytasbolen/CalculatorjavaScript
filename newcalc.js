const prompt = require("prompt-sync")({ sigint: true });

let sum = 0;

let continueComputing = true;
const operationTypes = ["+", "-", "*", "/"];

const askForValue = (text = "Enter your value") => {
  let value = parseFloat(prompt(text));
  while (isNaN(value)) {
    console.log("Please Enter a valid value");
    value = parseFloat(prompt(text));
  }

  return value;
};

const askFirstStep = () => {
  operation = prompt("Enter your operations");
  if (!operationTypes.includes(operation)) {
    console.log("Please Enter a valid operation");
    askFirstStep();
    return;
  }
  firstvalue = askForValue();
  newvalue = askForValue("Enter new value");
};

const askSecondStep = () => {
  operation = prompt("Enter your operations");
  if (!operationTypes.concat("=").includes(operation)) {
    console.log("Please Enter a valid operation");
    askSecondStep();
    return;
  }
  if (operation === "=") {
    console.log("Total Value => ", sum.toFixed(2));
    continueComputing = false;
    return;
  }
  newvalue = askForValue();
  switch (operation) {
    case "+" || "add":
      sum = sum + newvalue;
      break;
    case "*" || "multiply":
      sum = sum * newvalue;
      break;
    case "/" || "divide":
      sum = sum / newvalue;
      break;
    case "-" || "extraction":
      sum = sum - newvalue;
      break;
    default:
      askSecondStep();
  }
};

askFirstStep();

switch (operation) {
  case "+" || "add":
    sum = firstvalue + newvalue;
    break;
  case "*" || "multiply":
    sum = firstvalue * newvalue;
    break;
  case "/" || "divide":
    sum = firstvalue / newvalue;
    break;
  case "-" || "extraction":
    sum = firstvalue - newvalue;
    break;
  default:
    askFirstStep();
}

while (continueComputing) {
  askSecondStep();
}
