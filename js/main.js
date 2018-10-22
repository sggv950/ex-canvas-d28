'use strict';
var gCanvas = document.querySelector('#main-canvas');
var ctx = gCanvas.getContext('2d');
var gMouseState = false;
var gShape = 'square';
var gShapeColor = '#FF0000';
var gLastPosX = 0;
var gLastPosY = 0;

function setShape(elShape) {
    gShape = elShape;
}

function onMouseDown() {
    gMouseState = true;
}

function setBgColor(elColor){
    gCanvas.style.backgroundColor = elColor.value;
}

function setShapeColor(elColor){
    gShapeColor = elColor.value;
}

function onMouseUp() {
    gMouseState = false;
}

function isValidPos(x, y){
    return Math.abs(x - gLastPosX) > 40 || Math.abs(y - gLastPosY) > 40;
}

function draw(ev) {
    var coorX = ev.offsetX;
    var coorY = ev.offsetY;
    var isValid = isValidPos(coorX, coorY);
    if (gMouseState && isValid) {
        var randX = getRandomIntInclusive(10, 100);
        ctx.strokeStyle = gShapeColor;
        
        if (gShape === 'square') {
            ctx.strokeRect(coorX, coorY, randX, randX);
        } else {
            ctx.beginPath();
            ctx.arc(coorX,coorY,randX,0,Math.PI*2);
            ctx.stroke();
        }
        gLastPosX = coorX;
        gLastPosY = coorY;
    }
}

function saveCanvas(elLink) {
    console.log(elLink);
    elLink.href = gCanvas.toDataURL();
    elLink.download = 'my-canvas.jpg';
}

function clearCanvas() {
    ctx.clearRect(0,0,gCanvas.width, gCanvas.height);
}
