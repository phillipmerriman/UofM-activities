let statusSpan = document.querySelector("#status");
let statusToggle = document.querySelector("#status-toggle");
let playButton = document.querySelector("#play");
let pauseButton = document.querySelector("#pause");
let stopButton = document.querySelector("#stop");
let minutesDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");
let workMinutesInput = document.querySelector("#work-minutes");
let restMinutesInput = document.querySelector("#rest-minutes");

let totalSeconds = 0;
let secondsElapsed = 0;
let interval;

function startTimer() {
  secondsDisplay.textContent = 5;
  // Write code to start the timer here
  let countdown = setInterval(function(){
    secondsDisplay.textContent--;
    if(secondsDisplay.textContent <= 0) {
      clearInterval(countdown);
    }
  }, 1000)
  minutesDisplay.textContent = workMinutesInput.value;
}

startTimer();
playButton.addEventListener("click", startTimer);
