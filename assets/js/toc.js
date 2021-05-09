//
// Auto Highlighting TOC
//

const _navHeight = document.querySelector('.nav').getBoundingClientRect()
  .height;

// Click on a TOC item
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('#TableOfContents a');
  items.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const heading = document.querySelector(e.target.getAttribute('href'));
      const pos = heading.getBoundingClientRect();
      window.scrollTo({
        top: pos.top + window.pageYOffset - _navHeight,
        left: 0,
        behavior: 'smooth',
      });
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
    // if (heading.textContent == 'Basic Syntax') {
    //   console.log(heading.textContent, pos.top);
    // }

    if (pos.y < _navHeight) {
      activeItem = e;
    }
  });

  // The last one only
  if (activeItem) {
    activeItem.classList.add('active');
  }
}
