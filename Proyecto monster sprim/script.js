let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
 // hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function updateTimer() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      minutes = 59;
      hours--;
      if (hours < 0) {
        clearInterval(timer);
        alert("¡Tiempo cumplido!");
        return;
      }
    } else {
      seconds = 0; // Reiniciar los segundos al comenzar un nuevo minuto
    }
  }
  updateDisplay();
}


function updateDisplay() {
  const hoursDisplay = padTime(hours);
  const minutesDisplay = padTime(minutes);
  const secondsDisplay = padTime(seconds);
  document.getElementById('hours').textContent = hoursDisplay;
  document.getElementById('minutes').textContent = minutesDisplay;
  document.getElementById('seconds').textContent = secondsDisplay;
}

function padTime(time) {
  return (time < 10 ? '0' : '') + time;
}