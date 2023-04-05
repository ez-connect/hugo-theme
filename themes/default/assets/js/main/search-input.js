export function initSearchInput() {
  // Submit the form on enter the input
  function _onSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const input = form.querySelector('input');
    const q = input.value;

    if (q) {
      const section = form.getAttribute('data-section');
      // If in the /search page
      if (section == 'search') {
        // Update tabs
      } else {
        // Else,  navigate to the /search page
        const params = new URLSearchParams({ section, q });
        window.location.href = `/search/?${params.toString()}`;
      }
    }
  }

  const form = document.getElementById('searchForm');
  if (!form) return;

  // Handle on submit the form
  const section = form.getAttribute('data-section');
  form.addEventListener('submit', _onSubmit);
}
