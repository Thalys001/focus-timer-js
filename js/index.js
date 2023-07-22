import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} from './elements.js';

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound()

Events({ controls, timer, sound })


const darkMode = document.querySelector('.dark');
const lightMode = document.querySelector('.light');
const body = document.body;

function toggleDarkMode() {
  body.classList.add('dark-mode');
  darkMode.classList.add('hide');
  lightMode.classList.remove('hide');
}

function toggleLightMode() {
  body.classList.remove('dark-mode');
  lightMode.classList.add('hide');
  darkMode.classList.remove('hide');
}

darkMode.addEventListener("click", toggleDarkMode);
lightMode.addEventListener("click", toggleLightMode);