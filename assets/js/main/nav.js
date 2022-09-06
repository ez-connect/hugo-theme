import { util } from '../helpers/util';

export function initNav() {
  const navMenuBtnSel = '#navMenuButton';
  const navMenuItemSel = '.nav-menu';

  // Menu
  const menu = document.querySelector(navMenuItemSel);
  if (!menu) {
    util.hide(navMenuBtnSel);
  }

  const menuButton = document.getElementById('navMenuButton');
  menuButton.addEventListener('click', () => util.toogle(navMenuItemSel));
}
