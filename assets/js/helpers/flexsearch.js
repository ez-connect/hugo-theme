// Flexsearch wrapper
// Call `setDataFile` to assign a json data file to flexsearch
// Call `search` to query data
function FlexsearchHelper() {
  let _filename = 'index.json';
  let _index = null;

  // Set a json data file
  function setData(value) {
    _filename = value;
  };

  // Query `value` from the assigned data
  async function search (value) {
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

  // Load the json file to Flexsearch index
  async function _load() {
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

    const res = await fetch(_filename);
    const data = await res.json();
    data.map((e) => _index.add(e));
  }

  return { setData, search };
}

const flexsearchHelper = FlexsearchHelper();
export { flexsearchHelper };
