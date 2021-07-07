class TextSearch {
  constructor() {
    this._dataFile = 'index.json';
  }

  setDataFile(value) {
    this._dataFile = value;
  }

  async search(value) {
    if (!this._index) {
      await this._load();
    }

    const results = await this._index.search(value, {
      enrich: true,
      bool: 'or',
    });
    console.log(results);
    return results;
  }

  async _load() {
    this._index = new FlexSearch.Document({
      tokenize: 'forward',
      optimize: true,
      resolution: 9,
      cache: 100,
      // worker: true,
      document: {
        id: 'url',
        // tag: 'tags',
        index: ['title', 'url', 'description', 'content'],
        store: true,
      },
    });

    const res = await fetch(this._dataFile);
    const data = await res.json();
    data.map((e) => this._index.add(e));
  }
}

const textSearch = new TextSearch();
