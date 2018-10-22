'use strict';

var gCanvas = document.querySelector('#main-canvas');
var ctx = gCanvas.getContext('2d');
ctx.fillStyle = '#FF0000';
ctx.moveTo(50,50);
ctx.lineTo(50,150);
ctx.lineTo(100,100);
ctx.closePath();
ctx.stroke();

let draw = (ev) => {
    let coorX = ev.clientX - 8;
    let coorY = ev.clientY - 58;
    var ctx = gCanvas.getContext('2d');
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(coorX,coorY,10,10);
    console.log(ev);
}