const startBtn=document.querySelector(".start-btn");
const stopBtn=document.querySelector('.stop-btn');
const resetBtn=document.querySelector(".reset-btn");
const min=document.querySelector(".min");
const sec=document.querySelector(".sec");
const hour=document.querySelector(".hour");

function addZero(num){
    if(num<10){
        return "0"+num;
    }
    else{
        return num;
    }
}
let mini,secs,hrs;
mini=secs=hrs=0;
window.addEventListener("DOMContentLoaded",zeroStopWatch);
function zeroStopWatch(){
    hour.innerHTML=addZero(hrs);
    min.innerHTML=addZero(mini);
    sec.innerHTML=addZero(secs);
}
function display(){
    hour.innerText=addZero(hrs);
    min.innerText=addZero(mini);
    sec.innerText=addZero(secs);
}
function checkmili(){
    if(secs===60){
        secs=0;
        if(mini===60){
            mini=0;
            hrs+=1;
        }
        else{
            mini+=1;
            display();
        }
    }
    else{
        secs+=1;
        display();
    }
}
var intervalID,flag;
flag=false;
startBtn.addEventListener('click',function(){
    if(!flag){
        intervalID=setInterval(checkmili,1000);
        flag=true;
    }
})
stopBtn.addEventListener('click',function(){
    clearInterval(intervalID);
    flag=false;
})
resetBtn.addEventListener('click',function(){
    mini=secs=hrs=0;
    flag=false;
    clearInterval(intervalID);
    display();
})
