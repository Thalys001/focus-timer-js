import {
  darkMode,
  lightMode,
  body,
  svgElement
} from './elements.js'

export default function () {

  function svgElementBlack() {
    svgElement.forEach((path) => {
      path.style.fill = 'white';
    })
  }
  function svgElementWhite() {
    svgElement.forEach((path) => {
      path.style.fill = 'black';
    })
  }
  function toggleDarkMode() {
    body.classList.add('dark-mode');
    darkMode.classList.add('hide');
    lightMode.classList.remove('hide');
    svgElementBlack();
  }

  function toggleLightMode() {
    body.classList.remove('dark-mode');
    lightMode.classList.add('hide');
    darkMode.classList.remove('hide');
    svgElementWhite()
  }

  darkMode.addEventListener("click", toggleDarkMode);
  lightMode.addEventListener("click", toggleLightMode);

  return {
    toggleDarkMode,
    toggleLightMode,
    svgElementBlack
  }
}