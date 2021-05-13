const navHeight = document.querySelector('.nav').getBoundingClientRect().height;

///////////////////////////////////////////////////////////

let _debounceTimer = null;

function debounce(func, timeout = 500) {
  clearTimeout(_debounceTimer);
  _debounceTimer = setTimeout(function () {
    func.apply();
  }, timeout);
}

///////////////////////////////////////////////////////////

function scrollToElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    const pos = element.getBoundingClientRect();
    window.scrollTo({
      top: pos.top + window.pageYOffset - navHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
