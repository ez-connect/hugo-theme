// Nav - menu button
// Click to show #collapseMenu
document.addEventListener('DOMContentLoaded', function () {
  /// Click to open menu
  const button = document.querySelector('.nav .menu-btn');
  if (button != null) {
    button.addEventListener('click', function () {
      const menu = document.querySelector('#collapseMenu');
      if (!menu) {
        console.warn('Not found: #collapseMenu');
        return;
      }
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
});
