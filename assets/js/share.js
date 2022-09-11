function _initShare() {
  // let el = document.createElement('script');
  // el.setAttribute(
  //   'src',
  //   'https://unpkg.com/stackedit-js@1.0.7/docs/lib/stackedit.min.js',
  // );
  // document.body.appendChild(el);

  const data = JSON.parse(window.data);
  converter = new showdown.Converter();
  document.querySelector('.content').innerHTML = converter.makeHtml(
    data.content,
  );

  const stackedit = new Stackedit();

  // Open the iframe

  document.querySelector('#editBtn').addEventListener('click', () => {
    stackedit.openFile({
      name: 'Filename', // with an optional filename
      content: {
        text: data.content, // and the Markdown content.
      },
    });
  });

  // Listen to StackEdit events and apply the changes to the textarea.
  stackedit.on('fileChange', (file) => {
    data.content = file.content.text;
  });

  stackedit.on('close', () => {
    document.querySelector('.content').innerHTML = converter.makeHtml(
      data.content,
    );
    mermaid.init();

    // Post
    const body = { content: data.content };
    const url = document.querySelector('#editBtn').getAttribute('data-url');
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  });
}

_initShare();
