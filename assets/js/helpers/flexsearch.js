// Flexsearch wrapper
// Call `setDataFile` to assign a json data file to flexsearch
// Call `search` to query data
function FlexsearchHelper() {
  // An index for each section
  const _index = {
    document: null,
    article: null,
    career: null,
  };

  // Set a json data file
  function setData(value) {
    _filename = value;
  }

  // Search `query` from `section`
  async function search(section, query) {
    if (!_index[section]) {
      await _load(section);
    }

    return _index[section].search(query, {
      // Enrich IDs from the results with the corresponding documents
      enrich: true,
      // Sets the used logical operator when searching through multiple fields or tags.
      bool: 'or',
    });
  }

  // Load the json data of a section.
  // The path is: <section>/index.json
  async function _load(section) {
    // console.log('load flexsearch data:', section);
    const idx = new FlexSearch.Document({
      tokenize: 'full', // forward
      optimize: true,
      resolution: 9,
      cache: 100,
      worker: true,
      document: {
        id: 'url',
        index: [
          'title',
          'tags',
          'categories',
          'summary',
          'content',
          'updatedBy:firstname',
        ],
        store: true,
      },
    });

    const filename = `/${section}/index.json`;
    const res = await fetch(filename);
    const data = await res.json();
    data.map((e) => idx.add(e));
    // console.log('  records:', data.length);

    window.idx = idx;
    _index[section] = idx;
    // console.log('  done');
  }

  return { setData, search };
}

const flexsearchHelper = FlexsearchHelper();
export { flexsearchHelper };
