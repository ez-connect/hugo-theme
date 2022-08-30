function Modal(id) {
  const content = document.querySelector('#modalContent');

  _getModal = () => {
    return document.querySelector(id);
  };

  _onClickModal = () => {
    _hide();
  };

  show = (body) => {
    content.classList.remove('close');
    content.classList.add('open');
    util.show(id);
    if (body) {
      content.appendChild(body.cloneNode(true));
    }
  };

  hide = () => {
    content.classList.remove('open');
    content.classList.add('close');
    content.addEventListener('animationend', _onAnimationEnd);
  };

  _onAnimationEnd = () => {
    content.removeEventListener('animationend', _onAnimationEnd);
    util.hide(id);
    content.remo;
    content.childNodes.forEach(function (e) {
      content.removeChild(e);
    });
  };

  document.querySelector(id).addEventListener('click', hide);

  return { show, hide };
}

const modal = Modal('#modal');
export { modal };
