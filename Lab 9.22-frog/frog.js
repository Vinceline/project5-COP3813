//defining directions
const directions = {
   UP: 'up',
   DOWN: 'down',
   LEFT: 'left',
   RIGHT: 'right'
}

window.addEventListener("load", function () {
   const canvas = document.querySelector("canvas");

   drawFrog(canvas, 50, 50, directions.UP);
   drawFrog(canvas, 180, 50, directions.DOWN);
   drawFrog(canvas, 50, 180, directions.LEFT);
   drawFrog(canvas, 180, 180, directions.RIGHT);
});

function drawFrog(canvas, x, y, direction = directions.UP) {
   const context = canvas.getContext("2d");
   const frogImg = document.querySelector("img");

   if (direction !== directions.UP) {
      context.translate(x + frogImg.width / 2, y + frogImg.height / 2);
   }
//to translate frog image up, down, left or right
   switch (direction) {
      case directions.DOWN:
         context.rotate(Math.PI);
         context.translate(-(x + frogImg.width / 2), -(y + frogImg.height / 2));
         break;
      case directions.LEFT:
         context.rotate(-Math.PI / 2);
         context.translate(-(x + frogImg.width / 2), -(y + frogImg.height / 2));
         break;
      case directions.RIGHT:
         context.rotate(Math.PI / 2);
         context.translate(-(x + frogImg.width / 2), -(y + frogImg.height / 2));
         break;
      case directions.UP:
      default:
         break;
   }

   context.drawImage(frogImg, direction === directions.UP ? x : 0, direction === directions.UP ? y : 0);

   context.resetTransform();
}
