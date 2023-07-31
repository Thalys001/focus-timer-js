const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const moreTime = document.querySelector(".more-time");
const lessTime = document.querySelector('.less-time');
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-of");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const darkMode = document.querySelector('.dark');
const lightMode = document.querySelector('.light');
const body = document.body;
const svgElement = document.querySelectorAll('body svg path')

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  moreTime,
  lessTime,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
  darkMode,
  lightMode,
  body,
  svgElement
}