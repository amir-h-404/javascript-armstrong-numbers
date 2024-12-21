function calculateArmStrong() {
  const inputOfUser = document.querySelector("input[name=inputOfUser]").value;
  switch (false) {
    case checkIsNotEmpty(inputOfUser):
      showResult("Input cannot be empty!");
      break;
    case checkNumberIsInteger(inputOfUser):
      showResult("Input must be an integer!");
      break;
    default:
      const message = checkIsArmStrongNumber(inputOfUser)
        ? "The number is an Armstrong number."
        : "The number is not an Armstrong number.";
      showResult(message);
      break;
  }
}

// check user input is an Integer number:
function checkNumberIsInteger(input) {
  if (!Number.isSafeInteger(Number(input))) return false;
  return true;
}

// check user input is not empty:
function checkIsNotEmpty(input) {
  return input.trim().length !== 0;
}

// show or hide message of result:
function showResult(message, seeMe = true) {
  const resultP = document.getElementById("result");
  resultP.innerHTML = message;
  resultP.style.display = seeMe ? "block" : "none";
}

// check number is armstrong or not:
function checkIsArmStrongNumber(input) {
  // absolute value:
  const absInput = String(Math.abs(Number(input))),
    listOfChar = absInput.split(""), // ['1', '5', '3']
    inputNumber = listOfChar.reduce(
      // sum and power: 153
      (sum, value) => sum + Math.pow(Number(value), absInput.length),
      0
    );
  return inputNumber === Number(absInput);
}

// check user input is valid:
function inputIsValid() {
  const inputElm = document.querySelector("input[name=inputOfUser]");
  inputElm.value = inputElm.value.replace(/[^0-9]/i, "");
}
