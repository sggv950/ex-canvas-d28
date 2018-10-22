'use strict';
var gCanvas = document.querySelector('#main-canvas');
var ctx = gCanvas.getContext('2d');
var gMouseState = false;
var gShape = 'square';
var gOuterColor = '#FF0000';

function setShape(elShape) {
    gShape = elShape;
}

function onMouseDown() {
    gMouseState = true;
}


function onMouseUp() {
    gMouseState = false;
}



function draw(ev) {

    if (gMouseState) {
        var coorX = ev.clientX - 8;
        var coorY = ev.clientY - 58;
        var randX = getRandomIntInclusive(10, 100);
        ctx.strokeStyle = gOuterColor;
        
        if (gShape === 'square') {
            ctx.strokeRect(coorX, coorY, randX, randX);
        } else {
            ctx.beginPath();
            ctx.arc(coorX,coorY,randX,0,Math.PI*2);
            ctx.stroke();
        }
    }


    console.log(ev);


}

