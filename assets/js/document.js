class _Document {
  _init() {
    const items = document.querySelectorAll('a[data-toggle=collapse]');
    items.forEach((e) => {
      e.addEventListener('click', this._onClickMenuItem);
    });
  }

  _onClickMenuItem(e) {
    e.preventDefault();
    util.toogle(e.target.getAttribute('data-target'));
  }
}

const _document = new _Document();
_document._init();
