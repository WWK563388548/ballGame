var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 10;


window.onload = function() {

    var framesPerSecond = 30;
    console.log("Loading....");
    canvas = document.getElementById("gameCanvas");

    // 创建 context 对象: context 对象是内建的 HTML5 对象，
    // 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
    canvasContext = canvas.getContext('2d');
    setInterval(function() {
        drawEverything();
        moveEverything();
    }, 1000/framesPerSecond);  
}

function moveEverything() {

    ballX = ballX + ballSpeedX;
    if(ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
}

// fillRect 方法拥有参数(225,210,200,200)
// 在画布上绘制 200x200 的矩形，从坐标(225,210)开始
function drawEverything() {

    // Background
    colorRect(0,0,canvas.width,canvas.height,'black');
    // Left player's paddle
    colorRect(0, 210, 10, 100, 'white');
    // Just a ball
    colorCircle(ballX, 150, 10, 'white');
}

function colorCircle(centerX, centerY, radius, drawColor) {

	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {

	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);
}
