window.onload = function() {
  // canvas setup
  var c = document.getElementById('canvas'),
    context = c.getContext('2d'),
    width = c.width = window.innerWidth,
    height = c.height = window.innerHeight;
  context.fillStyle = "#CCD7C5";
  context.fillRect(0, 0, width, height);

  context.translate(0, height / 2);
  context.scale(1, -1);
  for (var angle = 0; angle < Math.PI * 2; angle += 0.01) {
    console.log(Math.sin(angle));

    var x = angle * 200,
      y = Math.sin(angle) * 200;
    context.fillStyle = "#ffffff";
    context.fillRect(x, y, 5, 5);

  }
}