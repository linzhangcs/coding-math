window.onload = function() {
  var c = document.getElementById('canvas'),
    context = c.getContext('2d'),
    width = c.width = window.innerWidth,
    height = c.height = window.innerHeight;
  context.fillStyle = "#CCD7C5";
  context.fillRect(0, 0, width, height);

  for (var i = 0; i < 100; i++) {
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.strokeStyle = "#EE9480";
    context.stroke();

    context.fillRect(Math.random() * width, Math.random() * height, Math.random() * 100, Math.random() * 100);
    context.fillStyle = "#D65780";
    context.clearRect(Math.random() * width, Math.random() * height, Math.random() * 100, Math.random() * 100);
    context.strokeStyle = "#B49A67";
    context.strokeRect(Math.random() * width, Math.random() * height, Math.random() * 100, Math.random() * 100);
  }
}