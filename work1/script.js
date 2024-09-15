let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 1;
let breakTime = 5;

let seconds = "00";
let isPaused = false;

let playbutton = document.getElementById('start');
let pausebutton = document.getElementById('pause');
let resetbutton = document.getElementById('reset');


// displying the window
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active')
}



function start() {
   
   playbutton.style.display = 'none';
   pausebutton.style.display = 'block';
   resetbutton.style.display = 'block';
    seconds = 59;
    isPaused = false;
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime -1;

let timerFunction = () => {
    if(isPaused == true) return;
    document.getElementById('minutes').innerHTML = workMinutes;
    document.getElementById('seconds').innerHTML = seconds;

    // start
    seconds = seconds-1;
        if(seconds === -1){
        workMinutes--;
        if(workMinutes < 0 && seconds == -1){
           clearInterval(interval);
           return;
        }
        seconds = 59;
    }
}

//setting interval here
interval = setInterval(timerFunction, 1000); 
    
    breakCount = 0;
}

//------------------//
// pause or unpause 
function pause () {

const pauseButton = document.getElementById('pause');

    if(isPaused === false){
        isPaused = true;
        pauseButton.innerHTML = `<i class="fa-solid fa-play"></i>`
        workTitle.classList.remove('active')
        breakTitle.classList.add('active')
    }  else {
        isPaused = false;
        pauseButton.innerHTML = `<i class="fa-solid fa-pause"></i>`
        breakTitle.classList.remove('active')
        workTitle.classList.add('active')
    }
}

//------------------//
// reset
function reset () {
    location.reload();
}