document.addEventListener('DOMContentLoaded', function () {
  const element = document.querySelector('#editor');
  if (element) {
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
      <h2>Example title</h2>
      <p>Write the cover letter...<p>
      <h2>Your CV</h2>
      <p><a href="#">https://example.com/path/to/your/cv.pdf</a></p>
    `;
  }
});
