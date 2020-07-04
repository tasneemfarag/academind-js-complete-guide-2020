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

function calculateResult(calculationType) {

  const enteredNumber = getUserNumberInput();

  if (
    calculationType !== 'ADD' && 
    calculationType !== 'SUBTRACT' && 
    calculationType !== 'MULTIPLY' && 
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }

  //if (
  // calculationType === 'ADD' || 
  //  calculationType === 'SUBTRACT' || 
  //  calculationType === 'MULTIPLY' || 
  //  calculationType === 'DIVIDE'
  //) {
    
  const intialResult = currentResult;
  let mathOperator;
  if(calculationType === 'ADD'){
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
 
  createAndWriteOutput(mathOperator, intialResult, enteredNumber);
  writeToLog(calculationType, intialResult, enteredNumber, currentResult);
 // }

  
}

function add() {
  calculateResult('ADD');
}

function subtact() {
  calculateResult('SUBTRACT');
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
