//
// Modal
//

function showModal(body) {
  const modal = document.querySelector('#modal');
  modal.classList.add('show');

  if (body) {
    const content = document.querySelector('#modalContent');
    content.appendChild(body.cloneNode(true));
  }
}

function hideModal() {
  const modal = document.querySelector('#modal');
  modal.classList.remove('show');
  modal.classList.add('hide');

  const content = document.querySelector('#modalContent');
  content.childNodes.forEach(function (e) {
    content.removeChild(e);
  });
}

function showLoading() {
  const loading = document.querySelector('.loading');
  loading.classList.remove('hide');
  loading.classList.add('show');
}

function hideLoading() {
  const loading = document.querySelector('.loading');
  loading.classList.remove('show');
  loading.classList.add('hide');
}

document.addEventListener('DOMContentLoaded', function () {
  // Hide the modal on click
  const modal = document.querySelector('#modal');
  modal.addEventListener('click', hideModal);

  // View images
  const images = document.querySelectorAll('.main img');
  images.forEach(function (image) {
    image.addEventListener('click', function (e) {
      showModal(e.target);
    });
  });
});
