const navMenuButtonID = '#navMenuButton';
const navMenuContentID = '#navMenu';

const searchInputParentID = '#search';
const searchInputID = '#searchInput';
const searchContentID = '#searchResult';

class _Nav {
  async _init() {
    // Menu
    const menu = document.querySelector(navMenuContentID);
    if (!menu) {
      util.hide(navMenuButtonID);
    }

    const menuButton = document.querySelector(navMenuButtonID);
    menuButton.addEventListener('click', this._onClickLeftButton);

    // Data file
    const section = searchInput.getAttribute('data-section');
    const dataFile = `/${section}/index.json`;
    let hasSearchData = section;
    if (hasSearchData) {
      const res = await fetch(dataFile, { method: 'HEAD' });
      hasSearchData = res.status == 200;
    }

    if (hasSearchData) {
      // Search
      const searchInput = document.querySelector(searchInputID);
      searchInput.addEventListener('focus', this._onFocusSearchInput);
      searchInput.addEventListener('blur', this._onBlurSearchInput);
      searchInput.addEventListener('input', this._onInputSearchInput);

      // Results to HTML
      textSearch.setDataFile(dataFile);
      this._items = [];
      this._searchContent = document.querySelector(searchContentID);

      util.show(searchInputParentID);
    } else {
      util.hide(searchInputParentID);
    }
  }

  _onClickLeftButton = () => {
    util.toogle(navMenuContentID);
  };

  _onFocusSearchInput = () => {
    if (this._items.length > 0) {
      util.show(searchContentID);
    }
  };

  _onBlurSearchInput() {
    setTimeout(() => util.hide(searchContentID), 200);
  }

  _onInputSearchInput = async (e) => {
    const results = await textSearch.search(e.target.value);
    // console.log(results);
    if (results.length == 0) {
      util.hide(searchContentID);
      return;
    }

    util.show(searchContentID);

    this._items = [];
    for (const e of results) {
      const { title, url, content } = e;
      const html = `
          <a href="${url}">
            ${title}
            <br />
            <span class="meta meta__text">${content.substr(0, 100)}...</span>
          </a>
      `;
      this._items.push(html);
    }

    this._searchContent.innerHTML = this._items.join('');
  };
}

const _nav = new _Nav();
_nav._init();
