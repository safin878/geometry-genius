function CalculateRectangleArea() {
  // get rectangle width value
  const widthInput = document.getElementById("rectangle-width");
  const Widthtext = widthInput.value;
  const width = parseFloat(Widthtext);
  console.log(width);
  // get rectangle height value
  const heightInput = document.getElementById("rectangle-height");
  const heighttext = heightInput.value;
  const height = parseFloat(heighttext);
  console.log(height);
  //   calculate rectangle area
  const area = width * height;
  console.log("Rectangle area is: " + area);
  // display Triangle Area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
