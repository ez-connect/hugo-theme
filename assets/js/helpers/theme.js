/**
 * Set Dark/Light theme.
 * If `value` is `null`, the `value` is read from `local storage`.
 * @param {string} value - Brightness: `null`, `dark` or `light`
 */
export function setTheme(value) {
  if (!value) {
    value = window.localStorage.getItem('brightness');
  }

  const darkCssExts = [
    'link[href="/theme.dark.css"]',
    'link[href="/monokai.css"]',
  ];

  // Enable or disable dark css externals
  for (const selector of darkCssExts) {
    const el = document.querySelector(selector);
    console.assert(el != null, 'external dark mode css is missing', selector);

    if (value == 'dark') {
      el.removeAttribute('disabled');
    } else {
      el.setAttribute('disabled', '');
    }
  }

  // Save to storage
  window.localStorage.setItem('brightness', value);
}
