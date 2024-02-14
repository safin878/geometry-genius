function firstParameter(firstP) {
  // get rectangle first value
  const firstInput = document.getElementById(firstP);
  const firstText = firstInput.value;
  const first = parseFloat(firstText);
  return first;
}
function secondParameter(secondP) {
  // get rectangle second value
  const secondInput = document.getElementById(secondP);
  const secondText = secondInput.value;
  const second = parseFloat(secondText);
  return second;
}
