function calculateArmStrong() {
  const inputOfUser = document.querySelector("input[name=inputOfUser]").value;
  // todo
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
