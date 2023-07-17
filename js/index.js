import resetControls from "./controls.js";
import { Timer } from "./timer.js";

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-of");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);
let timerTimeout;

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeout,
  resetControls,
});

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  timer.countdown();
});

buttonPause.addEventListener("click", function () {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
  clearTimeout(timerTimeout);
});

buttonStop.addEventListener("click", function () {
  resetControls();
  timer.resetTimer();
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
});

buttonSet.addEventListener("click", function () {
  let newMinutes = prompt("quantos minutos?");
  if (!newMinutes) {
    timer.resetTimer();
    return;
  }
  minutes = newMinutes;
  updateTimerDisplay(minutes, 0);
});
