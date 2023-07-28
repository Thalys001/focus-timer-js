import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import Theme from './theme.js'
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  moreTime,
  minutesDisplay,
  secondsDisplay
} from './elements.js';

const controls = Controls({
  buttonPause,
  buttonPlay,
  moreTime,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound()

const theme = Theme()

Events({ controls, timer, sound, theme })