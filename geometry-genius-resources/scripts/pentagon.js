function CalculatePentagonArea() {
  const firstP = "pentagon-p";
  const secondP = "pentagon-b";
  // display area of Parallelogram
  const area = 0.5 * firstParameter(firstP) * secondParameter(secondP);
  // display Parallelogram Area
  const pentagonAreaSpan = document.getElementById("pentagon-area");
  pentagonAreaSpan.innerText = area;
  console.log(area);
}
