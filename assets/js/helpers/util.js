function Util() {
  debounce = (func, timer, timeout = 500) => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply();
    }, timeout);
  };

  getQueryParam = (key) => {
    const url = new URLSearchParams(window.location.search);
    return url.get(key);
  };

  setCookie = (name, value, exp = 24 * 3600) => {
    exp = new Date().getDate() + exp;
    value = escape(value);
    document.cookie = `${name}=${escape(value)};expires=${exp};path=/;`;
  };

  getNavHeight = () => {
    return document.querySelector('.nav').getBoundingClientRect().height;
  };

  show = (selector) => {
    const element = document.querySelector(selector);
    element.classList.remove('hide');
    element.classList.add('show');
  };

  hide = (selector) => {
    const element = document.querySelector(selector);
    element.classList.remove('show');
    element.classList.add('hide');
  };

  toogle = (selector) => {
    const element = document.querySelector(selector);
    if (element.classList.contains('show')) {
      util.hide(selector);
    } else {
      util.show(selector);
    }
  };

  scrollToElement = (selector) => {
    const element = document.querySelector(selector);
    const pos = element.getBoundingClientRect();

    window.scrollTo({
      top: pos.top + window.pageYOffset - getNavHeight(),
      left: 0,
      behavior: 'smooth',
    });
  };

  return {
    debounce,
    getQueryParam,
    setCookie,
    getNavHeight,
    show,
    hide,
    toogle,
    scrollToElement,
  };
}

const util = Util();
export { util };
