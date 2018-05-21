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
    arrowX = centerX,
    arrowY = centerY,
    dx, dy, angle = 0;

  render();

  function render() {

    // clear canvas
    context.clearRect(0, 0, width, height);
    // context.fillStyle = "#BFCBC2";
    // context.fillRect(0, 0, width, height);

    // save
    context.save();
    // transform
    context.translate(arrowX, arrowY);
    context.rotate(angle);
    // draw
    context.beginPath();
    context.arc(0, 0, 2, 0, Math.PI * 2, false);
    context.stroke();

    context.beginPath();
    // moveTo method of the 2d api moves the starting point of a new
    // sub-path to the (x, y) coordinates
    context.moveTo(10, 0);
    // method that connects the the last point in the sub-pth to the x, y with a line
    context.lineTo(50, 0);
    context.lineTo(40, 10);
    context.lineTo(40, 10);
    context.moveTo(50, 0);
    context.lineTo(40, -10);
    context.stroke();

    // restore
    context.restore();
    requestAnimationFrame(render);
  }

  document.body.addEventListener('mousemove', function(e) {
    // update the angle
    var point = {};
    point.x = e.clientX;
    point.y = e.clientY;

    // arctangent - opposite / adjacent
    dy = point.y - arrowY;
    dx = point.x - arrowX;
    // angle = Math.atan(dy / dx);
    angle = Math.atan2(dy, dx);
  });
}