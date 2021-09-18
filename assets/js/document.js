function _document() {
  _onClickMenuItem = (e) => {
    e.preventDefault();
    const isExpanded = e.target.getAttribute('aria-expanded') === 'true';
    e.target.setAttribute('aria-expanded', !isExpanded);
    util.toogle(e.target.getAttribute('data-target'));
  };

  const items = document.querySelectorAll('a[data-toggle=collapse]');
  items.forEach((e) => {
    e.addEventListener('click', _onClickMenuItem);
  });
}

_document();
