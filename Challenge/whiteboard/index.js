const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const clear = document.getElementById("clear");

ctx.strokeStyle = "#000";
ctx.lineWidth = 10;
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown",(e)=>{
    isDrawing = true;
    const {offsetX,offsetY} = e;
    lastX = offsetX;
    lastY = offsetY;
})

canvas.addEventListener("mousemove",(e)=>{
    const {offsetX,offsetY} = e;
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(offsetX,offsetY);
        ctx.stroke();
        lastX = offsetX;
        lastY = offsetY;
    }
})

canvas.addEventListener("mouseup",()=>{
    isDrawing = false;
})

canvas.addEventListener("mouseleave",()=>{
    isDrawing = false;
})
clear.addEventListener('click',(e)=>{
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.clientWidth,canvas.clientHeight);
})