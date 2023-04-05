export function initPlantUML() {
  if (!window.plantumlEncoder) return;

  const elements = document.querySelectorAll('.plantuml');
  if (elements.length == 0) return;

  elements.forEach((v) => {
    const encoded = plantumlEncoder.encode(v.textContent);
    const src = '//www.plantuml.com/plantuml/svg/' + encoded;
    v.innerHTML = '<img src="' + src + '" />';
  });
}
