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
  if (input.length === 0) return false;
  return true;
}

// show or hide message of result:
function showResult(message, seeMe = true) {
  const resultP = document.getElementById("result");
  resultP.innerHTML = message;
  const displayOfP = seeMe ? "block" : "none";
  resultP.style.display = displayOfP;
}

// check number is armstrong or not:
function checkIsArmStrongNumber(input) {
  // absolute value:
  const absInput = String(Math.abs(Number(input)));
  let inputNumber = 0;
  for (const d of absInput) {
    inputNumber += Math.pow(Number(d), absInput.length);
  }
  if (inputNumber === Number(absInput)) return true;
  return false;
}

// check user input is valid:
function inputIsValid() {
  const inputElm = document.querySelector("input[name=inputOfUser]");
  inputElm.value = inputElm.value.replace(/[^0-9]/i, "");
}
