class _Auth {
  _init() {
    const button = document.querySelector('#signInButton');
    if (!button) return;
    button.addEventListener('click', this._onSubmit);
  }

  _onSubmit = async (e) => {
    e.preventDefault();
    util.show('.loading');

    const form = document.querySelector('#signInForm');
    const email = form.querySelector('input[name=email]').value;
    const password = form.querySelector('input[name=password]').value;
    const body = { email, password };

    const button = e.target;
    const method = button.getAttribute('data-method');
    const url = button.getAttribute('data-url');

    const error = form.querySelector('.error');

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      util.hide('.loading');

      if (res.status == 200) {
        error.textContent = '';
        // localStorage.setItem('auth', JSON.stringify(data.data));
        util.setCookie('token', data.data.token, 24 * 3600);
        window.location.href = util.getQueryParam('url');
        return;
      }

      error.textContent = data.message;
    } catch (err) {
      error.classList.remove('success');
      error.classList.add('error');
      error.textContent = err;
      util.hide('.loading');
    }
  };
}

const _auth = new _Auth();
_auth._init();
