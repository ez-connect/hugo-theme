function nav() {
  const navMenuButtonID = '#navMenuButton';
  const navMenuContentID = '#navMenu';

  const searchInputParentID = '#search';
  const searchInputID = '#searchInput';
  const searchContentID = '#searchResult';

  const textSearch = fsearch();

  _onClickLeftButton = () => {
    util.toogle(navMenuContentID);
  };

  _onFocusSearchInput = () => {
    if (_items.length > 0) {
      util.show(searchContentID);
    }
  };

  _onBlurSearchInput = () => {
    setTimeout(() => util.hide(searchContentID), 200);
  };

  _onInputSearchInput = async (e) => {
    const results = await textSearch.search(e.target.value);
    // console.log(results);
    if (results.length == 0) {
      util.hide(searchContentID);
      return;
    }

    util.show(searchContentID);

    _items = [];
    for (const item of results) {
      for (const e of item.result) {
        const { title, url, content } = e.doc;
        const html = `
          <a href="${url}">
            ${title}
            <br />
            <span class="meta meta__text">${content.substr(0, 100)}...</span>
          </a>
      `;
        _items.push(html);
      }
    }

    _searchContent.innerHTML = _items.join('');
  };

  _init = async () => {
    // Menu
    const menu = document.querySelector(navMenuContentID);
    if (!menu) {
      util.hide(navMenuButtonID);
    }

    const menuButton = document.querySelector(navMenuButtonID);
    menuButton.addEventListener('click', _onClickLeftButton);

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
      searchInput.addEventListener('focus', _onFocusSearchInput);
      searchInput.addEventListener('blur', _onBlurSearchInput);
      searchInput.addEventListener('input', _onInputSearchInput);

      // Results to HTML
      textSearch.setDataFile(dataFile);
      _items = [];
      _searchContent = document.querySelector(searchContentID);

      util.show(searchInputParentID);
    } else {
      util.hide(searchInputParentID);
    }
  };

  _init();
}

nav();
