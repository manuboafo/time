const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const counter = () =>{
    let day = new Date();
    let hoursvalue = day.getHours();
    let minutesvalue = day.getMinutes();
    let secondsvalue = day.getSeconds();
    hours.innerText = hoursvalue;
    minutes.innerText = minutesvalue;
    seconds.innerText = secondsvalue;
};



counter();
setInterval(counter, 1000);