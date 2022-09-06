import { initTimeago } from './helpers/timeago';
import { flexsearchHelper } from './helpers/flexsearch';
import { util } from './helpers/util';

// Text search input
export function initSearch() {
  /**
   * Use `flexsearch` to search, then update tab content
   * @param {string} section
   * @param {string} query
   */
  async function _search(section, query) {
    if (!section) return;

    util.setLoading(true);
    const items = await flexsearchHelper.search(section, query);
    // console.log(
    //   'search results: section =',
    //   section,
    //   'query =',
    //   query,
    //   'total =',
    //   items.length,
    // );

    // Update url
    _updatePageState(section, query);

    if (items.length > 0) {
      util.hide('.not-found');
    } else {
      util.show('.not-found');
    }

    const button = document.querySelector(`.tab button[data-id="${section}"]`);
    console.assert(button != null);
    const contentId = button.getAttribute('data-target');
    const contentNode = document.getElementById(contentId);

    const template = contentNode.querySelector('article:first-child');

    // Remove the last results
    contentNode.querySelectorAll('article').forEach((e) => {
      if (e != template) {
        contentNode.removeChild(e);
      }
    });

    // Append the results
    const topicResult = new Map();
    for (const item of items) {
      for (const res of item.result) {
        // console.log(res.doc);
        console.assert(contentNode != null, 'tab content is null');

        const node = template.cloneNode(true);
        node.classList.remove('hide');
        let html = node.innerHTML.replace(
          '${updatedBy.firstname}',
          res.doc.updatedBy.firstname,
        );

        html = html.replace('${updatedAt}', res.doc.updatedAt);
        html = html.replace('${title}', res.doc.title);
        html = html.replace('${url}', res.doc.url);
        html = html.replace('${summary}', res.doc.summary);
        // ...

        node.innerHTML = html;

        // Taxonomy
        const taxonomyListNode = node.querySelector('.taxonomy-list');
        if (res.doc.tags) {
          res.doc.tags.forEach((e) => {
            const taxonomy = document.createElement('a');
            taxonomy.setAttribute('href', `/tags/${e.toLowerCase()}`);
            taxonomy.innerText = e;
            taxonomyListNode.appendChild(taxonomy);

            topicResult.set(e, 'tags');
          });
        }

        if (res.doc.categories) {
          res.doc.categories.forEach((e) => {
            const taxonomy = document.createElement('a');
            taxonomy.setAttribute('href', `/categories/${e.toLowerCase()}`);
            taxonomy.innerText = e;
            taxonomyListNode.appendChild(taxonomy);

            topicResult.set(e, 'categories');
          });
        }

        contentNode.appendChild(node);
      }
    }

    // Append the topics
    console.log(topicResult);
    const taxonomyResultListNode = document.querySelector(
      '.menu-container .taxonomy-list',
    );
    taxonomyResultListNode
      .querySelectorAll('a')
      .forEach((e) => taxonomyResultListNode.removeChild(e));

    topicResult.forEach((v, k) => {
      const taxonomy = document.createElement('a');
      taxonomy.setAttribute('href', `/${v}/${k.toLowerCase()}`);
      taxonomy.innerText = k;
      taxonomyResultListNode.appendChild(taxonomy);
    });

    initTimeago(); // update timeago
    util.setLoading(false); // hide loading indicator
  }

  /**
   * Update the url when change tab or search.
   * The url will be updated: `/search/?section=${section}&q=${q}`.
   * @param {string} section - `section` query param
   * @param {string} q - `q` query param
   */
  function _updatePageState(section, q) {
    if (!section) {
      section = e.target.getAttribute('data-id');
    }

    if (!q) {
      q = util.getQueryParam('q');
    }

    const params = new URLSearchParams({ section, q });
    window.history.replaceState({}, null, `/search/?${params.toString()}`);
  }

  function initSearchInput() {
    // Listen for changes
    function _onInput(e) {
      const query = e.target.value;
      if (query) {
        _search(util.getQueryParam('section'), query);
      }
    }

    const form = document.getElementById('searchForm');
    if (!form) return;

    // Handle on input, in the /search page only
    const section = form.getAttribute('data-section');
    const input = form.querySelector('input');
    if (section == 'search') {
      input.addEventListener('input', _onInput);
    }

    // Update the input value from the query params
    const query = util.getQueryParam('q');
    if (query) {
      input.value = query;
      _search(util.getQueryParam('section'), query);
    }
  }

  /**
   * Update tabs following the query params - `section`
   */
  function updateTabs() {
    /**
     * Update the url when change tabs
     * @param {Event} event} e - the event
     */
    _onClickTab = (e) => {
      const section = e.target.getAttribute('data-id');
      const q = util.getQueryParam('q');
      _search(section, q);
    };

    const section = util.getQueryParam('section');
    if (section) {
      const button = document.querySelector(`.tab button[data-id='${section}'`);
      console.assert(button != null);
      tab('.tab').active(button);
    }

    // Update page state
    const buttons = document.querySelectorAll('.tab button');
    buttons.forEach((e) => e.addEventListener('click', _onClickTab));
  }

  initSearchInput();
  updateTabs();
}

initSearch();
