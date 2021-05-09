// Click a menu item to collapse / hide
document.addEventListener('DOMContentLoaded', function () {
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
