//
// Timeago
//

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.timeago');
  if (items.length > 0) {
    timeago.render(items);
  }
});
