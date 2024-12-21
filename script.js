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
      checkIsArmStrongNumber(inputOfUser);
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
function showResult(message = "", seeMe = true) {
  const resultP = document.getElementById("result");
  resultP.innerHTML = message;
  seeMe ? (resultP.style.display = "block") : (resultP.style.display = "none");
}

// check number is armstrong or not:
function checkIsArmStrongNumber(input) {
  // absolute value:
  const absInput = Math.abs(Number(input));
  for (const d of String(absInput)) {
    console.log(d);
  }
}
