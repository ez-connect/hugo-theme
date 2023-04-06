import { initMermaid } from './mermaid';

const _brightnessKey = 'brightness';

/**
 * Set Dark/Light theme.
 * If `value` is `null`, the `value` is read from `local storage`.
 * @param {string} value - Brightness: `null`, `dark` or `light`
 */
export function setTheme(value) {
  // Find the settings first if called `saveBrightness`
  if (!value) {
    value = window.localStorage.getItem(_brightnessKey);
  }

  // Use the options default
  if (!value) {
    value = document.body.getAttribute('data-brightness');
  }

  // Enable or disable dark css externals
  document.querySelectorAll('link[data-mode="dark"').forEach((e) => {
    if (value == 'dark') {
      e.removeAttribute('disabled');
    } else {
      e.setAttribute('disabled', '');
    }
  });

  initMermaid(value);
}

/**
 * Save `brightness` to the local storage
 * @param {string} value dark or light
 */
export function saveBrightness(value) {
  if (value) {
    window.localStorage.setItem(_brightnessKey, value);
  }
}
