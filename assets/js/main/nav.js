import { setTheme } from '../helpers/theme';

export function initNav() {
  /**
   * Toogle Dark/Light mode by enable/disable external dark mode css: /theme/dark.css.
   * Save `brightness = light|dark` to localstorage
   */
  function _toogleDarkMode() {
    const brightness =
      window.localStorage.getItem('brightness') == 'dark' ? 'light' : 'dark';
    setTheme(brightness);
  }

  // Show/hide mobile menu
  document
    .querySelector('#navMenuButton')
    .addEventListener('click', () => util.toogle('.nav .menu'));

  // Dark/light theme
  document
    .querySelector('#toogleDarkModeBtn')
    .addEventListener('click', _toogleDarkMode);
}
