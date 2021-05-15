const navMenuButtonID = '#navMenuButton';
const navMenuContentID = '#navMenu';

class _Nav {
  _init() {
    const content = document.querySelector(navMenuContentID);
    if (!content) {
      util.hide(navMenuButtonID);
    }

    const button = document.querySelector(navMenuButtonID);
    button.addEventListener('click', this._onClickLeftButton);
  }

  _onClickLeftButton = () => {
    util.toogle(navMenuContentID);
  };
}

const _nav = new _Nav();
_nav._init();
