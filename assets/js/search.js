function fsearch() {
  let _dataFile = 'index.json';
  let _index = null;

  _load = async () => {
    _index = new FlexSearch.Document({
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

    const res = await fetch(_dataFile);
    const data = await res.json();
    data.map((e) => _index.add(e));
  };

  setDataFile = (value) => {
    _dataFile = value;
  };

  search = async (value) => {
    if (!_index) {
      await _load();
    }

    const results = await _index.search(value, {
      enrich: true,
      bool: 'or',
    });
    console.log(results);
    return results;
  };

  return { setDataFile, search };
}
