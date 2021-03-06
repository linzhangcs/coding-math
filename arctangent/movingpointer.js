window.onload = function() {
  var c = document.getElementById('canvas'),
    context = c.getContext('2d'),
    width = c.width = window.innerWidth,
    height = c.height = window.innerHeight,

    //center
    centerX = width * 0.5,
    centerY = height * 0.5,
    offsetX = width * 0.4,
    arrowX = centerX,
    arrowY = centerY,
    dx, dy, angle = 0;

  var colorstrs = ["#FF934F", "#C2E812", "#77C98E", "#8B948E", "#FCBCB8", "#E8D7F1", "#EFA7A7", "#A7E8BD"];

  var path = new LissajousCurve(Math.random() * width * 0.46, Math.random() * height * 0.46,
    0.01, 0.0131, centerX, centerY, context, colorstrs[Math.floor(Math.random() * colorstrs.length)]);
  console.log("movingpointer");

  render();

  function render() {
    // clear canvas
    // context.clearRect(0, 0, width, height);
    context.fillStyle = "#FFD5C2";
    context.fillRect(0, 0, width, height);
    // save
    context.save();
    // transform
    arrowX = path.updateCenter().x;
    arrowY = path.updateCenter().y;

    context.translate(arrowX, arrowY);
    context.rotate(angle);
    // draw
    context.beginPath();
    context.arc(0, 0, 30, 0, Math.PI * 2, false);
    context.lineWidth = 10;
    context.strokeStyle = "#FFFFFF";
    context.stroke();

    context.beginPath();
    context.arc(0, 10, 3, 0, Math.PI * 2, false);
    context.lineWidth = 3;
    context.strokeStyle = "#F28F3B";
    context.stroke();

    context.beginPath();
    context.arc(0, -10, 3, 0, Math.PI * 2, false);
    context.lineWidth = 3;
    context.strokeStyle = "#C8553D";
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
    context.lineWidth = 3;
    context.strokeStyle = "#588B8B";
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
    console.log("mouse move");
    // arctangent - opposite / adjacent
    dy = point.y - arrowY;
    dx = point.x - arrowX;
    // angle = Math.atan(dy / dx);
    angle = Math.atan2(dy, dx);
  });

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
    };
    this.updateCenter = function() {
      this.x = Math.cos(this.angleX) * this.radX + centerX;
      this.y = Math.sin(this.angleY) * this.radY + centerY;
      this.angleX += this.speedX;
      this.angleY += this.speedY;
      return {
        x: this.x,
        y: this.y
      };
    }
  }

}