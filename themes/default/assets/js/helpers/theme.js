import { initMermaid } from './mermaid';

const _themeKey = 'theme';

/**
 * Get the current theme
 */
export function getTheme() {
  // Find the settings first if called `saveTheme`
  let value = window.localStorage.getItem(_themeKey);

  // Use the options default
  if (!value) {
    value = document.body.getAttribute('data-theme');
  }

  // Or, automatically
  if (!value) {
    value = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  return value;
}

/**
 * Set Dark/Light theme.
 * If `value` is `null`, the `value` is read from `local storage`.
 * @param {string} value - Brightness: `null`, `dark` or `light`
 */
export function setTheme(value) {
  const theme = value ?? getTheme();

  // Enable or disable dark css externals
  document.querySelectorAll('link[data-mode="dark"').forEach((e) => {
    if (theme == 'dark') {
      e.removeAttribute('disabled');
    } else {
      e.setAttribute('disabled', '');
    }
  });

  // Update light/dark icon on the Nav
  document
    .querySelector('#toogleDarkModeBtn')
    ?.querySelectorAll('span')
    .forEach((e) => {
      if (e.getAttribute('data-theme') == theme) {
        e.classList.remove('hide');
      } else {
        e.classList.add('hide');
      }
    });

  initMermaid(theme);
}

/**
 * Save `theme` to the local storage
 * @param {string} value dark or light
 */
export function saveTheme(value) {
  if (value) {
    window.localStorage.setItem(_themeKey, value);
  }
}
