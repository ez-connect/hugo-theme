document.addEventListener('DOMContentLoaded', function () {
  let elements = document.querySelectorAll('.plantuml');
  elements.forEach((v) => {
    let encoded = window.plantumlEncoder.encode(v.textContent);
    let src = '//www.plantuml.com/plantuml/svg/' + encoded;
    v.innerHTML = '<img src="' + src + '" />';
  });
});
