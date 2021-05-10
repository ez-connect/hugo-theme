// Submit CV
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('#submitCV');
  button.addEventListener('click', async function (e) {
    e.preventDefault();

    const form = document.querySelector('#applicantForm');
    const title = form.querySelector('input[name=title]').value;
    const phone = form.querySelector('input[name=phone]').value;
    const email = form.querySelector('input[name=email]').value;
    const content = form.querySelector('textarea[name=content]').value;

    const body = { title, phone, email, content };

    console.log(body);
    const error = form.querySelector('.error');
    const baseURL = button.getAttribute('data-target');
    try {
      const res = await fetch(`${baseURL}/applicants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.statusCode != 200) {
        const messages = Object.entries(data.data.errors).map(function ([
          k,
          v,
        ]) {
          return `<li>${v}</li>`;
        });
        error.innerHTML = `
          <strong>${data.error}</strong>
          <ul>
            ${messages.join('')}
          </ul>
        `;
      }
    } catch (err) {
      error.textContent = err;
    }
  });
});
