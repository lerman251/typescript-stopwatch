const startButton: HTMLElement | null = document.getElementById("start")!;
console.log ('starButton: ', startButton);
const stopButton: HTMLElement | null = document.getElementById("stop")!;
console.log ('stopButton: ', stopButton);
const resetButton: HTMLElement | null = document.getElementById("reset")!;
const minutes: HTMLElement = document.querySelector('.minutes')!;
const seconds: HTMLElement = document.querySelector('.seconds')!;
let timerTime: number = 0o0;
let isRunning: boolean = false;
let interval: number;



function startTimer() {
    if (isRunning) return;
  
    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
  }

function stopTimer() {
  if (!isRunning) return;

  isRunning = false;
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();

  timerTime = 0;
  minutes.innerText = '00';
  seconds.innerText = '00';
}

function incrementTimer() {
  timerTime++;

  const numOfMinutes: number = Math.floor(timerTime / 60);
  const numOfSeconds:number  = timerTime % 60;

  minutes.innerText = pad(numOfMinutes) as string;
  seconds.innerText = pad(numOfSeconds) as string;
}

function pad(number: number) {
  return (number < 10) ? '0' + number: number;
  // if (number < 10) {
  //   return '0' + number;
  // } else {
  //   return number;
  // }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

