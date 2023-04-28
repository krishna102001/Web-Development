const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const infoMini=document.querySelector('.info-mini');
const deadline=document.querySelector('.deadline');
const deadlineTime=document.querySelectorAll('.deadline-time h4');

//future time
const tempDate = new Date();
const tempYear= tempDate.getFullYear();
const tempMonth=tempDate.getMonth();
const tempDay=tempDate.getDate();

const futureDate=new Date(tempYear, tempMonth, tempDay + 10 , 11 , 30, 0);
const year=futureDate.getFullYear();
const month=months[futureDate.getMonth()];
const date=futureDate.getDate();
const day=weekdays[futureDate.getDay()];
//displaying giveaway date

infoMini.textContent=`Giveaway ends on ${day}, ${date} ${month} ${year} ${futureDate.getHours()}:${futureDate.getMinutes()}am`;
const futureTime=futureDate.getTime();
//function for countdown
function countDown(){
    const todayTime=new Date().getTime();
    // console.log(todayTime);
    // 1sec = 1000ms
    // 1min = 60sec
    // 1hr = 60 min
    // 1day = 24hr
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;
    let remainingTime = futureTime - todayTime;
    // console.log(remainingTime);
    let remainingDay = Math.floor(remainingTime / oneDay);
    let remainingHour = Math.floor((remainingTime % oneDay) / oneHour);
    let remainingMin = Math.floor((remainingTime % oneHour) / oneMin);
    let remainingSec = Math.floor((remainingTime % oneMin) / 1000);
    // console.log(remainingHour);
    // console.log(remainingMin);
    // console.log(remainingSec);
    // console.log(remainingDay);
    function format(l){
        if(l<10){
            return `0${l}`
        }
        else{
            return l;
        }
    }
    const values=[remainingDay,remainingHour,remainingMin,remainingSec];
    deadlineTime.forEach(function(i,k){
        i.innerHTML = format(values[k]);
    })
    if(remainingTime<0){
        clearInterval();
        deadline.innerHTML = `<h4 class="info-mini">Sorry Giveaway Has Been Expired !!</h4>`
    }  
}
setInterval(countDown,1000);