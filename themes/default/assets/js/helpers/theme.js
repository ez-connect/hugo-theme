import { initMermaid } from './mermaid';

/**
 * Set Dark/Light theme.
 * If `value` is `null`, the `value` is read from `local storage`.
 * @param {string} value - Brightness: `null`, `dark` or `light`
 */
export function setTheme(value) {
  // Find the settings first
  if (!value) {
    value = window.localStorage.getItem('brightness');
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

  // Save to storage
  if (value) {
    window.localStorage.setItem('brightness', value);
  }
}
