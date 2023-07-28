export default function Controls({
  buttonPause,
  buttonPlay,
  moreTime,
  buttonStop,
}) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    // moreTime.classList.add("hide");
    // buttonStop.classList.remove("hide");
  }

  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function reset() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    // moreTime.classList.remove("hide");
    // buttonStop.classList.remove("hide");
  }

  function getMinutes() {
    let newMinutes = 5
    if (!newMinutes) {
      return false
    }
    return newMinutes;
  }

  return {
    play,
    pause,
    reset,
    getMinutes,
  }
}