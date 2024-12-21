function calculateArmStrong() {
  const inputOfUser = document.querySelector("input[name=inputOfUser]");
  console.log(checkIsNotEmpty(inputOfUser.value));
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
