//
// Auto Highlighting TOC
//

// Click on a TOC item
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('#TableOfContents a');
  items.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      scrollToElement(e.target.getAttribute('href'));
    });
  });
});

// Highlight the current TOC item
document.addEventListener('scroll', function () {
  debounce(() => _setActive());
});

function _setActive() {
  const items = document.querySelectorAll('#TableOfContents a');

  let activeItem = items.length > 0 ? items[0] : null;
  items.forEach(function (e) {
    e.classList.remove('active');

    const heading = document.querySelector(e.getAttribute('href'));
    const pos = heading.getBoundingClientRect();

    if (pos.y < navHeight) {
      activeItem = e;
    }
  });

  // The last one only
  if (activeItem) {
    activeItem.classList.add('active');
  }
}
