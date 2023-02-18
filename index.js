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

function add() {
  const getInputNumber = getUserInput();
  const initialInput = currentResult;
  // const descInput = `${currentResult} + ${getInputNumber}`;
  currentResult = currentResult + getInputNumber;
  // outputResult(currentResult, descInput);
  createAndWriteOutput('+', initialInput, getInputNumber);
  writeToLog('ADD', initialInput, getInputNumber, currentResult);
}
function sub() {
  const getInputNumber = getUserInput();
  const initialInput = currentResult;
  currentResult = currentResult - getInputNumber;
  createAndWriteOutput('-', initialInput, getInputNumber);
  writeToLog('SUB', initialInput, getInputNumber, currentResult);
}
function mul() {
  const getInputNumber = getUserInput();
  const initialInput = currentResult;
  currentResult = currentResult * getInputNumber;
  createAndWriteOutput('*', initialInput, getInputNumber);
  writeToLog('MUL', initialInput, getInputNumber, currentResult);
}
function div() {
  const getInputNumber = getUserInput();
  const initialInput = currentResult;
  currentResult = currentResult / getInputNumber;
  createAndWriteOutput('/', initialInput, getInputNumber);
  writeToLog('DIV', initialInput, getInputNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);
