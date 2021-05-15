class _Nav {
  _init() {
    const button = document.querySelector('.nav .menu-btn');
    if (button != null) {
      button.addEventListener('click', this._onClickMenuButton);
    }
  }

  _onClickMenuButton = () => {
    const menu = document.querySelector('#collapseMenu');
    if (!menu) {
      console.warn('Not found: #collapseMenu');
      return;
    }

    if (util.isShow('#collapseMenu')) {
      util.hide('#collapseMenu');
    } else {
      util.show('#collapseMenu');
    }
  };
}

const _nav = new _Nav();
_nav._init();
