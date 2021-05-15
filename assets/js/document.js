class _Document {
  _init() {
    const items = document.querySelectorAll('a[data-toggle=collapse]');
    items.forEach((e) => {
      e.addEventListener('click', this._onClickMenuItem);
    });
  }

  _onClickMenuItem(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('data-target');
    const isExpanded = e.target.getAttribute('aria-expanded');

    if (isExpanded == 'true') {
      e.target.setAttribute('aria-expanded', false);
      util.hide(targetId);
    } else {
      e.target.setAttribute('aria-expanded', true);
      util.show(targetId);
    }
  }
}

const _document = new _Document();
_document._init();
