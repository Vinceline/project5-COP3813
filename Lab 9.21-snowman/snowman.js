// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function () {
   let canvas = document.querySelector("canvas");

   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);
   drawSnowflakes(canvas);
});

function drawGround(canvas) {
   let context = canvas.getContext("2d");

   // Background 
   context.fillStyle = "#bbb";
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 80, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {
   for (let c = 0; c < 100; c++) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

function drawSnowText(canvas) {
   let context = canvas.getContext("2d");

   // Text properties
   context.font = "80px Verdana";
   context.textAlign = "center";
   context.textBaseline = "top";
   context.fillStyle = "blue";

   // Draw text
   context.fillText("SNOW", canvas.width / 2, 10);
}

function drawSnowman(canvas) {
   let context = canvas.getContext("2d");

   // Bottom circle
   context.beginPath();
   context.arc(150, 200, 50, 0, Math.PI * 2);
   context.fillStyle = "white";
   context.fill();

   // Middle circle
   context.beginPath();
   context.arc(150, 120, 40, 0, Math.PI * 2);
   context.fillStyle = "white";
   context.fill();

   // Top circle
   context.beginPath();
   context.arc(150, 60, 25, 0, Math.PI * 2);
   context.fillStyle = "white";
   context.fill();
}

function drawSingleFlake(canvas, x, y) {
   let context = canvas.getContext("2d");

   // Draw diamond shape
   context.beginPath();
   context.moveTo(x, y);
   context.lineTo(x + flakeSize / 2, y + flakeSize / 2);
   context.lineTo(x, y + flakeSize);
   context.lineTo(x - flakeSize / 2, y + flakeSize / 2);

   // Set fill style
   context.fillStyle = "#eee";

   // Fill the shape
   context.fill();
}

