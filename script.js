function calculateArmStrong() {
  const inputOfUser = document.querySelector("input[name=inputOfUser]");
  console.log(checkNumberIsInteger(inputOfUser.value));
}

// check user input is an Integer number:
function checkNumberIsInteger(input) {
  if (!Number.isInteger(Number(input))) return false;
  return true;
}
