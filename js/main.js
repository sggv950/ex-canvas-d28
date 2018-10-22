'use strict';
var gCanvas = document.querySelector('#main-canvas');
var ctx = gCanvas.getContext('2d');
var gMouseState = false;
var gShape = 'square';
var gOuterColor = '#FF0000';
var gLastPosX = 0;
var gLastPosY = 0;

function setShape(elShape) {
    gShape = elShape;
}

function onMouseDown() {
    gMouseState = true;
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
        ctx.strokeStyle = gOuterColor;
        
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


    // console.log(ev);


}

