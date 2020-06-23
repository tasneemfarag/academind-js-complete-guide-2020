const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifir, prevResult, operationNumber, newResult){

  const logEntry = {
    operation: operationIdentifir,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);

}

function add() {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', intialResult, enteredNumber);
  writeToLog('ADD', intialResult, enteredNumber, currentResult);
  
}

function subtact() {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', intialResult, enteredNumber);
  writeToLog('SUBTRACT', intialResult, enteredNumber, currentResult);
}

function multiply(){
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', intialResult, enteredNumber);
  writeToLog('MULTIPLY', intialResult, enteredNumber, currentResult);
}

function divide(){
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', intialResult, enteredNumber);
  writeToLog('DIVIDE', intialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtact);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
