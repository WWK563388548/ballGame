var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;

var paddle1Y = 250;
// This value is a constant
var PADDLE_HEIGHT = 100;

function calculateMousePosition(event) {

    var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = event.clientX - rect.left - root.scrollLeft;
	var mouseY = event.clientY - rect.top - root.scrollTop;
	return {
		x:mouseX,
		y:mouseY
	};
}

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

    canvas.addEventListener('mousemove', function(evt) {
		var mousePos = calculateMousePosition(evt);
		paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
	});  
}

function moveEverything() {

    ballX = ballX + ballSpeedX;
    ballX = ballY + ballSpeedY;

    if(ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }

    if(ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }

    if(ballY < 0) {
		ballSpeedY = -ballSpeedY;
    }
    
	if(ballY > canvas.height) {
		ballSpeedY = -ballSpeedY;
	}
    
}

// fillRect 方法拥有参数(225,210,200,200)
// 在画布上绘制 200x200 的矩形，从坐标(225,210)开始
function drawEverything() {

    // Background
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    // Left player's paddle
    colorRect(0, paddle1Y, 10, PADDLE_HEIGHT, 'white');
    // Just a ball
    colorCircle(ballX, ballY, 10, 'white');
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
