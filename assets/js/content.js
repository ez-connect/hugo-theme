class _Content {
  constructor() {
    this._anchor = null;
  }

  _init() {
    this._hightlightHeadings();
    this._zoomImages();
  }

  _hightlightHeadings() {
    // Apply for content component only
    const content = document.querySelector('.content');
    if (!content) return;

    this._anchor = document.createElement('a');
    this._anchor.innerText = ' #';
    this._anchor.addEventListener('click', this._onClickHeading);

    const headings = content.querySelectorAll('h2, h3, h4');
    headings.forEach((v) => {
      v.addEventListener('mouseenter', this._onMouseEnterHeading);
    });

    headings.forEach((v) => {
      v.addEventListener('mouseleave', this._onMouseLeaveHeading);
    });
  }

  _zoomImages() {
    const images = document.querySelectorAll('.content img');
    images.forEach((image) => {
      image.addEventListener('click', this._onClickImage);
    });
  }

  _onClickHeading = (e) => {
    e.preventDefault();
    const hash = `#${this._anchor.parentNode.id}`;
    // window.location.hash = hash; // can't prevent the default scroll behavior
    history.pushState(null, null, hash);
    util.scrollToElement(hash);
  };

  _onMouseEnterHeading = (e) => {
    const target = e.target;
    this._anchor.setAttribute('href', `#${target.id}`);
    target.appendChild(this._anchor);
  };

  _onMouseLeaveHeading = (e) => {
    e.target.removeChild(this._anchor);
  };

  _onClickImage = (e) => {
    modal.show(e.target);
  };
}

const _content = new _Content();
_content._init();
