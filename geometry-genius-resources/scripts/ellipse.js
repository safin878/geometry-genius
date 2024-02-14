function CalculateEllipseArea() {
  const firstP = "ellipse-a";
  const secondP = "ellipse-b";
  // display area of Parallelogram
  const area = 3.1416 * firstParameter(firstP) * secondParameter(secondP);
  // display Parallelogram Area
  const pentagonAreaSpan = document.getElementById("ellipse-area");
  pentagonAreaSpan.innerText = area;
  console.log(area);
}
