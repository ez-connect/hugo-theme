class _Toc {
  constructor() {
    this._timer = null;
  }

  _init() {
    this._handleOnScroll();
    this._handleOnClick();
  }

  // Highlight the current TOC item
  _handleOnScroll() {
    const that = this;
    document.addEventListener('scroll', function () {
      util.debounce(that._highlight, this._timer);
    });
  }

  // Click on a TOC item
  _handleOnClick() {
    const items = document.querySelectorAll('#TableOfContents a');
    items.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        util.scrollToElement(e.target.getAttribute('href'));
      });
    });
  }

  // Highlight current item
  _highlight() {
    const items = document.querySelectorAll('#TableOfContents a');

    let activeItem = items.length > 0 ? items[0] : null;
    items.forEach(function (e) {
      e.classList.remove('active');

      const heading = document.querySelector(e.getAttribute('href'));
      const pos = heading.getBoundingClientRect();

      if (pos.y < util.getNavHeight()) {
        activeItem = e;
      }
    });

    // The last one only
    if (activeItem) {
      activeItem.classList.add('active');
    }
  }
}

const _toc = new _Toc();
_toc._init();
