window.onload = function() {
  var c = document.getElementById('canvas'),
    context = c.getContext('2d'),
    width = c.width = window.innerWidth,
    height = c.height = window.innerHeight,

    centerX = width * 0.5,
    centerY = height * 0.5,
    numOfCurves = 333,
    curves = [],
    colorstrs = ["#FF934F", "#C2E812", "#77C98E", "#8B948E", "#FCBCB8", "#E8D7F1", "#EFA7A7", "#A7E8BD"];
  // radiusX = 200,
  // radiusY = 400,
  // angleX = 0,
  // speedX = 0.1,
  // angleY = 0,
  // speedY = 0.131,
  // x, y;

  // generate n number of lissajous curves
  for (var i = 0; i < numOfCurves; i++) {
    curves[i] = new LissajousCurve(Math.random() * width * 0.46, Math.random() * height * 0.46,
      Math.random() * 0.08, Math.random() * 0.04,
      centerX, centerY, context, colorstrs[Math.floor(Math.random() * colorstrs.length)]);
  }
  render();

  function render() {
    // context.clearRect(0, 0, width, height);
    context.fillStyle = "#B4A6AB";
    context.fillRect(0, 0, width, height);

    // x = Math.cos(angleX) * radiusX + centerX;
    // y = Math.sin(angleY) * radiusY + centerY;
    //
    // context.beginPath();
    // context.fillStyle = "#C2E812"
    // context.arc(x, y, 15, 0, Math.PI * 2, false);
    // context.fill();
    //
    // angleX += speedX;
    // angleY += speedY;

    for (var i = 0; i < numOfCurves; i++) {
      curves[i].drawCurve();
    }
    requestAnimationFrame(render);
  }

  function LissajousCurve(radX, radY, speedX, speedY, centerX, centerY, context, colorstr) {
    this.radX = radX;
    this.radY = radY;
    this.speedX = speedX;
    this.speedY = speedY;
    this.angleX = this.angleY = this.x = this.y = 0;
    this.drawCurve = function() {
      this.x = Math.cos(this.angleX) * this.radX + centerX;
      this.y = Math.sin(this.angleY) * this.radY + centerY;
      // console.log(this.x);
      context.beginPath();
      context.fillStyle = colorstr
      context.arc(this.x, this.y, Math.random() * 11, 0, Math.PI * 2, false);
      context.fill();

      this.angleX += this.speedX;
      this.angleY += this.speedY;
    }
  }
}