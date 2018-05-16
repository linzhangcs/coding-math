window.onload = function() {
  // canvas setup
  var c = document.getElementById('canvas'),
    context = c.getContext('2d'),
    width = c.width = window.innerWidth,
    height = c.height = window.innerHeight;
  // context.fillStyle = "#CDEDF6";
  // context.fillRect(0, 0, width, height);

  // TODO: understand the use of translate & scale
  context.translate(0, height / 2);
  // context.translate(width / 2, 0);

  context.scale(1, -1);
  // context.scale(1, -1);

  //center
  var centerX = width * 0.5,
    centerY = height * 0.5,
    offset = height * 0.49,
    offsetX = width * 0.49,
    baseRad = 100,
    offsetRad = 90,
    speed = 0.03,
    angle = 0;

  render();

  function render() {
    var y = centerY - baseRad + Math.sin(angle) * offset,
      x = centerX - baseRad + Math.sin(angle) * offsetX,
      rad = baseRad + Math.sin(angle) * offsetRad;

    context.clearRect(0, 0, width, height);
    context.fillStyle = "#CDEDF6";
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(centerX, y, rad, 0, Math.PI * 2, false);
    context.fillStyle = "#D84727";
    context.fill();
    angle += speed;
    context.scale(1, -1);

    // context.beginPath();
    // context.arc(x, centerY, rad, 0, Math.PI * 2, false);
    // context.fillStyle = "#D84727";
    // context.fill();
    // angle += speed;
    // context.scale(-1, 1);

    requestAnimationFrame(render);
  }
}