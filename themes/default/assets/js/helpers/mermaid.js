import { getTheme } from './theme';

/**
 * Init mermaid with dark/light mode
 * @param {string} theme - dark or light
 * @returns
 */
export function initMermaid(theme) {
  if (!window.mermaid) return;
  theme = theme ?? getTheme();
  const mermaidTheme = theme == 'light' ? 'neutral' : 'dark';

  mermaid.initialize({
    // startOnLoad: false,
    theme: mermaidTheme,
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
