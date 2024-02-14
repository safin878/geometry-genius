function CalculateRectangleArea() {
  // get rectangle width value
  const widthInput = document.getElementById("rectangle-width");
  const WidthText = widthInput.value;
  const width = parseFloat(WidthText);
  console.log(width);
  // get rectangle height value
  const heightInput = document.getElementById("rectangle-height");
  const heightText = heightInput.value;
  const height = parseFloat(heightText);
  console.log(height);
  //   calculate rectangle area
  const area = width * height;
  console.log("Rectangle area is: " + area);
  // display Triangle Area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
