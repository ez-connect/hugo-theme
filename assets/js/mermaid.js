document.addEventListener('DOMContentLoaded', function () {
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
});
