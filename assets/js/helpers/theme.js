/**
 * Set Dark/Light theme.
 * If `value` is `null`, the `value` is read from `local storage`.
 * @param {string} value - Brightness: `null`, `dark` or `light`
 */
export function setTheme(value) {
  if (!value) {
    value = window.localStorage.getItem('brightness');
  }

  // Enable or disable dark css externals
  document.querySelectorAll('link[data-mode="dark"').forEach((e) => {
    if (value == 'dark') {
      e.removeAttribute('disabled');
    } else {
      e.setAttribute('disabled', '');
    }
  });

  // Save to storage
  window.localStorage.setItem('brightness', value);

  // Show body
  document.body.classList.remove('invisibility');
}
