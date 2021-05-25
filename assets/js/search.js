class TextSearch {
  constructor() {
    this._dataFile = 'index.json';
  }

  setDataFile(value) {
    this._dataFile = value;
  }

  async search (value) {
    if (!this._index) {
      await this._load();
    }

    const results = await this._index.search(value);
    return results;
  };

  async _load() {
    const res = await fetch(this._dataFile);
    const data = await res.json();
    this._index = new FlexSearch('memory', {
      doc: {
        id: 'url',
        field: ['title', 'description', 'url', 'tags', 'content'],
      },
      encode: 'balance',
      tokenize: 'forward',
      threshold: 0,
      async: false,
      worker: false,
      cache: true,
    });
    this._index.add(data);
  }
}

const textSearch = new TextSearch();
