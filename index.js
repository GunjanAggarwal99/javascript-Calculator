import './style.css';

const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
const defaultResult = 0;
let currentResult = defaultResult;
let logEntry = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const descInput = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, descInput);
}

function writeToLog(operat, preNum, enterNum, endResult) {
  const logEntries = {
    operator: operat,
    prevNumber: preNum,
    enterNumber: enterNum,
    result: endResult,
  };
  logEntry.push(logEntries);
  console.log(logEntry);
}

function calculationResult(operatorUSed) {
  const getInputNumber = getUserInput();
  if (
    (operatorUSed !== 'ADD' &&
      operatorUSed !== 'SUB' &&
      operatorUSed !== 'MUL' &&
      operatorUSed !== 'DIV') ||
    !getInputNumber
  ) {
    return;
  }
  const initialInput = currentResult;
  let mathOperator;
  if (operatorUSed === 'ADD') {
    currentResult = currentResult + getInputNumber;
    mathOperator = '+';
  } else if (operatorUSed === 'SUB') {
    currentResult = currentResult - getInputNumber;
    mathOperator = '-';
  } else if (operatorUSed === 'MUL') {
    currentResult = currentResult * getInputNumber;
    mathOperator = '*';
  } else if (operatorUSed === 'DIV') {
    currentResult = currentResult / getInputNumber;
    mathOperator = '/';
  }
  createAndWriteOutput(mathOperator, initialInput, getInputNumber);
  writeToLog(currentResult, initialInput, getInputNumber, currentResult);
}

// function add() {
//   calculationResult('ADD');
// const getInputNumber = getUserInput();
// const initialInput = currentResult;
// const descInput = `${currentResult} + ${getInputNumber}`;
// currentResult = currentResult + getInputNumber;
// outputResult(currentResult, descInput);
// createAndWriteOutput('+', initialInput, getInputNumber);
// writeToLog('ADD', initialInput, getInputNumber, currentResult);
// }
// function sub() {
//   calculationResult('SUB');
// }
// function mul() {
//   calculationResult('MUL');
// }
// function div() {
//   calculationResult('DIV');
// }

addBtn.addEventListener('click', calculationResult.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculationResult.bind(this, 'SUB'));
multiplyBtn.addEventListener('click', calculationResult.bind(this, 'MUL'));
divideBtn.addEventListener('click', calculationResult.bind(this, 'DIV'));
