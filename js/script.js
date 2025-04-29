const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Get canvas dimensions
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Rectangle dimensions
const rectWidth = 250;
const rectHeight = 150;

// Calculate center position for rectangle
const rectX = (canvasWidth - rectWidth) / 2;
const rectY = (canvasHeight - rectHeight) / 2;

// Draw rectangle
ctx.beginPath();
ctx.rect(rectX, rectY, rectWidth, rectHeight);
ctx.strokeStyle = 'red';
ctx.fillStyle = 'green';
ctx.fill();
ctx.stroke();

// Calculate center of rectangle for circle
const circleX = rectX + rectWidth / 2;
const circleY = rectY + rectHeight / 2;
const circleRadius = 50;

// Draw circle
ctx.beginPath();
ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();