function Util() {
  const debounce = (func, timer, timeout = 500) => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply();
    }, timeout);
  };

  function getQueryParam(key) {
    const url = new URLSearchParams(window.location.search);
    return url.get(key);
  }

  function setCookie(name, value, exp = 24 * 3600) {
    exp = new Date().getDate() + exp;
    value = escape(value);
    document.cookie = `${name}=${escape(value)};expires=${exp};path=/;`;
  }

  function getNavHeight() {
    return document.querySelector('.nav').getBoundingClientRect().height;
  }

  function show(selector) {
    const element = document.querySelector(selector);
    element.classList.remove('hide');
    element.classList.add('show');
  }

  function hide(selector) {
    const element = document.querySelector(selector);
    element.classList.remove('show');
    element.classList.add('hide');
  }

  function toogle(selector) {
    const element = document.querySelector(selector);
    if (element.classList.contains('show')) {
      util.hide(selector);
    } else {
      util.show(selector);
    }
  }

  function scrollToElement(selector) {
    const element = document.querySelector(selector);
    const pos = element.getBoundingClientRect();

    window.scrollTo({
      top: pos.top + window.pageYOffset - getNavHeight(),
      left: 0,
      behavior: 'smooth',
    });
  }

  /**
   * Show, hide the loading indicator.
   */
  function setLoading(visible) {
    if (visible) {
      show('.loading');
    } else {
      hide('.loading');
    }
  }

  return {
    debounce,
    getQueryParam,
    setCookie,
    getNavHeight,
    show,
    hide,
    toogle,
    scrollToElement,
    setLoading,
  };
}

const util = Util();
export { util };
