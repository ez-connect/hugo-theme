//
// Content components
//

// Mouse enter on a heading
document.addEventListener('DOMContentLoaded', function () {
  const anchor = document.createElement('a');
  anchor.innerText = ' #';

  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const hash = `#${anchor.parentNode.id}`;
    // window.location.hash = hash; // can't prevent the default scroll behavior
    history.pushState(null, null, hash);
    scrollToElement(hash);
  });

  const headings = document.querySelectorAll('h2, h3, h4');
  headings.forEach(function (v) {
    v.addEventListener('mouseenter', function () {
      anchor.setAttribute('href', `#${v.id}`);
      v.appendChild(anchor);
    });
  });

  headings.forEach(function (v) {
    v.addEventListener('mouseleave', function () {
      v.removeChild(anchor);
    });
  });
});
