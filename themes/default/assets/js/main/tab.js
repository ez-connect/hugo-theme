/**
 * Initializes a tabs.
 * @param {string} selector - A string containing one or more selectors to match.
 */
function tab(selector) {
  /**
   * Active a tab
   * @param {Node} tab - A tab button element
   */
  function active(tab) {
    // Remove the "active" class
    const item = tab.parentNode.querySelector('button.active');
    console.assert(item != null, 'tabs: no active tab');
    item.classList.remove('active');

    // Add the "active" class
    tab.classList.add('active');

    // Show the current tab
    const targetContentId = tab.getAttribute('data-target');
    tab.parentNode.querySelectorAll('button').forEach((e) => {
      const id = e.getAttribute('data-target');
      const tabContent = document.getElementById(id);
      console.assert(tabContent != null, 'tabs: data-target is missing');

      if (tabContent) {
        if (id != targetContentId) {
          tabContent.classList.add('hide');
        } else {
          tabContent.classList.remove('hide');
        }
      }
    });
  }

  /**
   * Handle on click a tab.
   * @param {Event} e - The click event
   */
  function _onClick(e) {
    let target = e.target;
    active(target);
  }

  // Show the current tab content
  const container = document.querySelector(selector);
  if (container == null) return; // no tabs

  const index = container.getAttribute('data-index');
  const tabs = container.querySelectorAll('button').forEach((e, i) => {
    // Active the current tab
    if (i == index) {
      active(e);
    }

    // Add `click` event to all tabs
    e.addEventListener('click', _onClick);
  });

  return { active };
}

/**
 * Init all tabs that match selector `.tab`
 */
export function initTab() {
  window.tab = tab;
  tab('.tab');
}

window.tab = tab;
