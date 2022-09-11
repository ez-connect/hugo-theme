/**
 * Init mermaid with dark/light mode
 * @param {string} theme - dark or light
 * @returns
 */
export function initMermaid(theme) {
  if (!window.mermaid) return;

  if (!theme) {
    theme = window.localStorage.getItem('brightness');
  }

  theme = theme == 'light' ? 'neutral' : 'dark';

  mermaid.initialize({
    // startOnLoad: false,
    theme,
    flowchart: {
      useMaxWidth: true,
    },
    gantt: {
      numberSectionStyles: 4,
      axisFormat: '%m-%d',
    },
    sequence: {
      showSequenceNumbers: true,
    },
  });

  // mermaid.init();
}
