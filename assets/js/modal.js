const modalID = `#modal`;
const modalContentID = `#modalContent`;

class Modal {
  init() {
    const element = this._getModal();
    element.addEventListener('click', this.hide);
  }

  show(body) {
    util.show(modalID);
    if (body) {
      this._getModalContent().appendChild(body.cloneNode(true));
    }
  }

  hide = () => {
    util.hide(modalID);

    const content = this._getModalContent();
    content.childNodes.forEach(function (e) {
      content.removeChild(e);
    });
  };

  _getModal() {
    return document.querySelector(modalID);
  }

  _getModalContent() {
    return document.querySelector(modalContentID);
  }

  _onClickModal = () => {
    this._hide();
  };
}

const modal = new Modal();
modal.init();
