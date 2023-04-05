import * as timeago from '../vendors/timeago';

export function initTimeago() {
  if (!timeago) {
    console.warn('timeago not found');
    return;
  }

  const elements = document.querySelectorAll('.timeago');
  if (elements.length > 0) {
    timeago.render(elements);
  }
}
