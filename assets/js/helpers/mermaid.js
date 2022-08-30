export function initMermaid() {
  if (!window.mermaid) return;

  mermaid.initialize({
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
}
