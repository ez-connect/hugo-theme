const navMenuButtonID = '#navMenuButton';
const navMenuContentID = '#navMenu';
const searchInputID = '#searchInput';
const searchContentID = '#searchResult';

class _Nav {
  _init() {
    // Menu
    const menu = document.querySelector(navMenuContentID);
    if (!menu) {
      util.hide(navMenuButtonID);
    }

    const menuButton = document.querySelector(navMenuButtonID);
    menuButton.addEventListener('click', this._onClickLeftButton);

    // Search
    const searchInput = document.querySelector(searchInputID);
    this._searchContent = document.querySelector(searchContentID);
    if (searchInput && this._searchContent) {
      searchInput.addEventListener('focus', this._onFocusSearchInput);
      searchInput.addEventListener('blur', this._onBlurSearchInput);
      searchInput.addEventListener('input', this._onInputSearchInput);
    }

    // Results to HTML
    this._items = [];
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
    setTimeout(() => util.hide(searchContentID), 1000);
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
