import { util } from './helpers/util';
import { initQuillJS } from './helpers/quill';

function _initCareer() {
  /**
   * Submit a CV
   */
  _onSubmit = async (e) => {
    e.preventDefault();
    util.show('.loading');

    const pathname = window.location.pathname;
    const matches = pathname.match(/.*-(\d+)\/$/);
    const job = matches[1];

    const form = document.querySelector('#applyJobForm');
    const title = form.querySelector('input[name=title]').value;
    const phone = form.querySelector('input[name=phone]').value;
    const email = form.querySelector('input[name=email]').value;
    // const content = form.querySelector('textarea[name=content]').value;
    let content = document.querySelector('.ql-editor').innerHTML;
    const turndownService = new TurndownService({ headingStyle: 'atx' });
    content = turndownService.turndown(content);

    const body = { title, phone, email, content, job };

    // console.log(body);
    const button = e.target;
    const method = button.getAttribute('data-method');
    const url = button.getAttribute('data-url');

    const success = form.querySelector('.success');
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
        error.classList.add('hide');
        success.classList.remove('hide');
        success.querySelector('span').textContent = `
          Thanks for taking the time to apply for our position.
          We appreciate your interest in our company.
          We're currently in the process of taking applications for this position.
        `;
        return;
      }

      success.classList.add('hide');
      error.classList.remove('hide');
      const messages = Object.entries(data.data.errors).map(function ([k, v]) {
        return `<li>${v}</li>`;
      });

      error.querySelector('span').textContent = `
        <strong>${data.error}</strong>
        <ul>
          ${messages.join('')}
        </ul>
      `;
    } catch (err) {
      success.classList.add('hide');
      error.classList.remove('hide');
      error.querySelector('span').textContent = err;
      util.hide('.loading');
    }
  };

  const button = document.querySelector('#applyJobButton');
  // console.assert(button != null);
  if (button) {
    button.addEventListener('click', _onSubmit);
  }
}

initQuillJS();
_initCareer();
