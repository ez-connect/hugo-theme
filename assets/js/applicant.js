class _Applicant {
  constructor() {
    this._button = document.querySelector('#applyJob');
  }

  _init() {
    if (!this._button) return;
    this._button.addEventListener('click', this._onSubmit);
  }

  _onSubmit = async (e) => {
    e.preventDefault();
    util.show('.loading');

    const pathname = window.location.pathname;
    const matches = pathname.match(/.*-(\d+)\/$/);
    const job = matches[1];

    const form = document.querySelector('#applicantForm');
    const title = form.querySelector('input[name=title]').value;
    const phone = form.querySelector('input[name=phone]').value;
    const email = form.querySelector('input[name=email]').value;
    // const content = form.querySelector('textarea[name=content]').value;
    let content = document.querySelector('.ql-editor').innerHTML;
    const turndownService = new TurndownService({ headingStyle: 'atx' });
    content = turndownService.turndown(content);

    const body = { title, phone, email, content, job };

    // console.log(body);
    const error = form.querySelector('.error');
    const baseURL = this._button.getAttribute('data-target');
    try {
      const res = await fetch(`${baseURL}/applicants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      util.hide('.loading');

      if (res.status == 200) {
        error.classList.remove('error');
        error.classList.add('success');
        error.innerHTML = `
          Thanks for taking the time to apply for our position.
          We appreciate your interest in our company.
          We're currently in the process of taking applications for this position.
        `;
        return;
      }

      error.classList.remove('success');
      error.classList.add('error');
      const messages = Object.entries(data.data.errors).map(function ([k, v]) {
        return `<li>${v}</li>`;
      });

      error.innerHTML = `
        <strong>${data.error}</strong>
        <ul>
          ${messages.join('')}
        </ul>
      `;
    } catch (err) {
      error.classList.remove('success');
      error.classList.add('error');
      error.textContent = err;
      util.hide('.loading');
    }
  };
}

const _applicant = new _Applicant();
_applicant._init();
