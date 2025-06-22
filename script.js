const timerTextElem = document.getElementById("timer-text");

let timeInSec = 0;
let intervalId = null; // Track the interval

const timerFunc = () => {
  timeInSec++;

  const sec = timeInSec % 60;
  let min = Math.floor(timeInSec / 60);
  min = min % 60;
  const hrs = Math.floor(timeInSec / 3600);

  timerTextElem.innerText = `${hrs.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
};
const handleStart = () => {
  if (!intervalId) {
    intervalId = setInterval(timerFunc, 1000);
  }
};

const handlePause = () => {
  clearInterval(intervalId);
  intervalId = null;
};

const handleResume = () => {
  if (!intervalId) {
    intervalId = setInterval(timerFunc, 1000);
  }
};

const handleReset = () => {
  clearInterval(intervalId);
  intervalId = null;
  timeInSec = 0;
  timerTextElem.innerText = "00:00:00";
};

const handleLap = () => {
  const para = document.createElement("p");
  para.innerText = timerTextElem.innerText;
  document.getElementById("root").appendChild(para);
};
