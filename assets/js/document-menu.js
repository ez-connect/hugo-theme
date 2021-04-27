//
// Collapse menu
//

document.addEventListener('DOMContentLoaded', function () {
  /// Click to open menu
  const button = document.querySelector('.collapse-menu');
  if (button != null) {
    button.addEventListener('click', function () {
      const menu = document.querySelector('.menu-container');
      const classList = menu.classList;
      if (classList.contains('show')) {
        classList.remove('show');
        classList.add('hide');
      } else {
        classList.remove('hide');
        menu.classList.add('show');
      }
    });
  }

  /// Click to expand a sub-category
  const items = document.querySelectorAll('a[data-toggle=collapse]');
  for (const item of items) {
    item.onclick = function (e) {
      e.preventDefault();
      const targetId = e.target.getAttribute('data-target');
      const isExpanded = e.target.getAttribute('aria-expanded');

      const target = document.querySelector(targetId);
      if (isExpanded == 'true') {
        e.target.setAttribute('aria-expanded', false);
        target.classList.remove('show');
        target.classList.add('hide');
      } else {
        e.target.setAttribute('aria-expanded', true);
        target.classList.remove('hide');
        target.classList.add('show');
      }
    };
  }
});
