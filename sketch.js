let stockPriceInput;
let annualDividendInput;
let calculateButton;
let dividendPercentageDisplay;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Input for stock price
  stockPriceInput = createInput('34');
  stockPriceInput.position(width / 2 + 100, height / 2 - 20);
  stockPriceInput.size(200);
  stockPriceInput.style('padding', '10px');

  // Input for annual dividend
  annualDividendInput = createInput('0.70');
  annualDividendInput.position(width / 2 + 100, height / 2 + 20);
  annualDividendInput.size(200);
  annualDividendInput.style('padding', '10px');

  // Button to calculate dividend percentage
  calculateButton = createButton('คำนวณเปอร์เซ็นต์ปันผล');
  calculateButton.position(width / 2 + 100, height / 2 + 60);
  calculateButton.size(200, 40);
  calculateButton.style('background-color', '#4CAF50');
  calculateButton.style('color', 'white');
  calculateButton.style('border', 'none');
  calculateButton.style('cursor', 'pointer');
  calculateButton.mouseOver(() => calculateButton.style('background-color', '#45a049'));
  calculateButton.mouseOut(() => calculateButton.style('background-color', '#4CAF50'));
  calculateButton.mousePressed(calculateDividendPercentage);

  // Display area for dividend percentage
  dividendPercentageDisplay = createP('');
  dividendPercentageDisplay.position(width / 2 + 100, height / 2 + 110);
  dividendPercentageDisplay.size(200);
  dividendPercentageDisplay.style('font-size', '16px');
}

function draw() {
  // Gradient background
  setGradient(0, 0, width, height, color(142, 45, 226), color(74, 0, 224));

  // Text prompts
  textSize(16);
  fill(255);
  text('กรอกราคาหุ้น:', width / 2 - 70, height / 2 - 10);
  text('กรอกเงินปันผลรายปี:', width / 2 - 130, height / 2 + 30);
}

function calculateDividendPercentage() {
  let stockPrice = parseFloat(stockPriceInput.value());
  let annualDividend = parseFloat(annualDividendInput.value());
  let dividendPercentage = (annualDividend / stockPrice) * 100;
  
  dividendPercentageDisplay.html(`เปอร์เซ็นต์ปันผล: ${dividendPercentage.toFixed(2)}%`);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  stockPriceInput.position(width / 2 + 100, height / 2 - 20);
  annualDividendInput.position(width / 2 + 100, height / 2 + 20);
  calculateButton.position(width / 2 + 100, height / 2 + 60);
  dividendPercentageDisplay.position(width / 2 + 100, height / 2 + 110);
}

// Function to set a gradient background
function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}
