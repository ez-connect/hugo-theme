export function initQuillJS() {
  if (!window.Quill) return;
  if (!window.QuillMarkdown) return;

  const element = document.querySelector('#editor');
  if (!element) return;

  const editor = new Quill('#editor', {
    // debug: 'info',
    // modules: {
    //   toolbar: '#toolbar',
    // },
    placeholder: element.getAttribute('data-placeholder'),
    // readOnly: true,
    // theme: 'snow',
  });

  new QuillMarkdown(editor, {
    /**
     ignoreTags: [ 'pre', 'strikethrough'], // @option - if you need to ignore some tags.

    tags: { // @option if you need to change for trigger pattern for some tags.
      blockquote: {
        pattern: /^(\|){1,6}\s/g,
      },
      bold: {
        pattern:  /^(\|){1,6}\s/g,
      },
      italic: {
        pattern: /(\_){1}(.+?)(?:\1){1}/g,
      },
    },
    */
  });

  document.querySelector('.ql-editor').innerHTML = `
    <h3>Cover letter</h3>
    <p>Write your cover letter here...</p>
    <blockquote>TIP: The editor support <b>Markdown syntax</b>, and hotkeys</blockquote>
    <h3>Curriculum Vitae</h3>
    <p>Paste your CV's url here</p>
    <p>Example:</p>
    <ul><li><a href="https://example.com/path/to/your/cv/">https://example.com/path/to/your/cv/</a></li><li><a href="https://example.com/path/to/your/cv/">https://github.com/yourname/</a></li></ul>
  `;
}
