//
// Collapse
//
function collapse() {
  const items = document.querySelectorAll('.sub-category > p > .title');
  console.log(items);
  for (const item of items) {
    item.onclick = function (e) {
      e.preventDefault();
      const contentNode = e.target.parentNode.nextElementSibling;
      const classes = contentNode.classList;
      if (classes.contains('hide')) {
        classes.remove('hide');
        classes.add('show');
      } else {
        classes.remove('show');
        classes.add('hide');
      }
    };
  }
}

collapse();
