import { addCopyCodeButton } from '../helpers/clipboard';
import { initTimeago } from '../helpers/timeago';
import { initMermaid } from '../helpers/mermaid';
import { initPlantUML } from '../helpers/plantuml';

import { modal } from '../helpers/modal';
import { util } from '../helpers/util';

export function initContent() {
  let _anchor = null;

  _hightlightHeadings = () => {
    // Apply for content component only
    const content = document.querySelector('.content');
    if (!content) return;

    _anchor = document.createElement('a');
    _anchor.innerText = ' #';
    _anchor.addEventListener('click', _onClickHeading);

    const headings = content.querySelectorAll('h2, h3, h4');
    headings.forEach((v) => {
      v.addEventListener('mouseenter', _onMouseEnterHeading);
    });

    headings.forEach((v) => {
      v.addEventListener('mouseleave', _onMouseLeaveHeading);
    });
  };

  _zoomImages = () => {
    const images = document.querySelectorAll('.content img');
    images.forEach((image) => {
      image.addEventListener('click', _onClickImage);
    });
  };

  _onClickHeading = (e) => {
    e.preventDefault();
    const hash = `#${_anchor.parentNode.id}`;
    // window.location.hash = hash; // can't prevent the default scroll behavior
    history.pushState(null, null, hash);
    util.scrollToElement(hash);
  };

  _onMouseEnterHeading = (e) => {
    const target = e.target;
    _anchor.setAttribute('href', `#${target.id}`);
    target.appendChild(_anchor);
  };

  _onMouseLeaveHeading = (e) => {
    e.target.removeChild(_anchor);
  };

  _onClickImage = (e) => {
    modal.show(e.target);
  };

  _hightlightHeadings();
  _zoomImages();

  initTimeago();
  addCopyCodeButton();
  initMermaid();
  initPlantUML();
}
