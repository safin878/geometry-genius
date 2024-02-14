function CalculateRhombusArea() {
  const firstP = "rhombus-d1";
  const secondP = "rhombus-d2";
  // display area of Parallelogram
  const area = 0.5 * firstParameter(firstP) * secondParameter(secondP);
  // display Parallelogram Area
  const rhombusAreaSpan = document.getElementById("rhombus-area");
  rhombusAreaSpan.innerText = area;
  console.log(area);
}
