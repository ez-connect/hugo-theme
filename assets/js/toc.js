//
// Auto Highlighting TOC
//

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('#TableOfContents a');
  for (const e of items) {
    e.addEventListener('click', function (e) {
      e.preventDefault();

      const heading = document.querySelector(e.target.getAttribute('href'));
      // heading.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'nearest',
      //   inline: 'nearest',
      // });
      const pos = heading.getBoundingClientRect();
      window.scrollTo({
        top: pos.top + window.pageYOffset - 100,
        left: 0,
        behavior: 'smooth',
      });
    });
  }
});

document.addEventListener('scroll', function () {
  const items = document.querySelectorAll('#TableOfContents a');
  let activeItem = null;
  for (const e of items) {
    e.classList.remove('active');

    const heading = document.querySelector(e.getAttribute('href'));
    const pos = heading.getBoundingClientRect();
    console.log(pos.top, window.pageYOffset, window.innerHeight);
    if (pos.y < window.pageYOffset) {
      activeItem = e;
    }
  }

  if (activeItem) {
    activeItem.classList.add('active');
  }
});
