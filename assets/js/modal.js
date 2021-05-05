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

document.addEventListener('DOMContentLoaded', function () {
  // Hide the modal on click
  const modal = document.querySelector('#modal');
  modal.addEventListener('click', hideModal);

  // View images
  const images = document.querySelectorAll('.content-container img');
  images.forEach(function (image) {
    image.addEventListener('click', function (e) {
      showModal(e.target);
    });
  });
});
