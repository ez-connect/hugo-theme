export function initNav() {
  const navMenuButtonID = '#navMenuButton';
  const navMenu = '.nav-menu';

  // Menu
  const menu = document.querySelector(navMenu);
  if (!menu) {
    util.hide(navMenuButtonID);
  }

  const menuButton = document.querySelector(navMenuButtonID);
  menuButton.addEventListener('click', () => util.toogle(navMenu));
}
