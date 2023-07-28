import {
  buttonPause,
  buttonPlay,
  moreTime,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  lessTime,
} from './elements.js'


export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", function () {
    controls.pause()
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  buttonSoundOff.addEventListener("click", function () {
    buttonSoundOn.classList.remove("hide");
    buttonSoundOff.classList.add("hide");
    sound.bgAudio.play();
  });

  buttonSoundOn.addEventListener("click", function () {
    buttonSoundOn.classList.add("hide");
    buttonSoundOff.classList.remove("hide");
    sound.bgAudio.pause();
  });
  
  let count = 0 

  moreTime.addEventListener("click", function () {
    let newMinutes = controls.getMinutes();
    count = count + newMinutes
    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(count, 0);
    timer.updateMinutes(count);
  })

  lessTime.addEventListener("click", function () {
    let newMinutes = controls.getMinutes();
    count = count - newMinutes
    if (!newMinutes || count < 0) {
      timer.reset();
      count = 0 
      return;
    }

    timer.updateDisplay(count, 0);
    timer.updateMinutes(count);
  })
}