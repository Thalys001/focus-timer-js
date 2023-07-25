import {
  darkMode,
  lightMode,
  body
} from './elements.js'

export default function () {

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

  return {
    toggleDarkMode,
    toggleLightMode
  }
}