function calculateParallelogramArea() {
  const firstP = "parallelogram-base";
  const secondP = "parallelogram-height";
  // display area of Parallelogram
  const area = firstParameter(firstP) * secondParameter(secondP);
  // display Parallelogram Area
  const ParallelogramAreaSpan = document.getElementById("parallelogram-area");
  ParallelogramAreaSpan.innerText = area;
}
