window.onload = function() {
  // canvas setup
  var c = document.getElementById('canvas'),
    context = c.getContext('2d'),
    width = c.width = window.innerWidth,
    height = c.height = window.innerHeight;

  //center
  var centerX = width * 0.5,
    centerY = height * 0.5,
    offsetX = width * 0.4,
    baseRad = 20,
    offsetRad = 200,
    speed = 0.05,
    angletwo = 0,
    angle = 0;

  render();

  function render() {

    context.clearRect(0, 0, width, height);
    context.fillStyle = "#BFCBC2";
    context.fillRect(0, 0, width, height);

    // update x and y based on the angle
    var x = Math.cos(angle) * (baseRad + offsetRad),
      y = Math.sin(angle) * (baseRad + offsetRad);

    context.beginPath();
    //ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
    context.arc(x + centerX, y + centerY, baseRad, 0, Math.PI * 2, false);
    context.fillStyle = "#C2E812";
    context.fill();
    angle += 0.01;

    var x = Math.cos(angletwo) * (baseRad + offsetRad),
      y = Math.sin(angletwo) * (baseRad + offsetRad);
    context.beginPath();
    context.arc(x + centerX + baseRad * 3, y + centerY + baseRad * 3, baseRad, 0, Math.PI * 2, false);
    context.fillStyle = "#91F5AD";
    context.fill();
    angletwo += 0.1;
    requestAnimationFrame(render);
  }
}