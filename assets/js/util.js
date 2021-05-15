class Util {
  debounce(func, timer, timeout = 500) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply();
    }, timeout);
  }

  getNavHeight() {
    return document.querySelector('.nav').getBoundingClientRect().height;
  }

  show(selector) {
    const element = document.querySelector(selector);
    if (!element) return;
    element.classList.remove('hide');
    element.classList.add('show');
  }

  isShow(selector) {
    const element = document.querySelector(selector);
    return element.classList.contains('show');
  }

  hide(selector) {
    const element = document.querySelector(selector);
    if (!element) return;
    element.classList.remove('show');
    element.classList.add('hide');
  }

  isHide(selector) {
    const element = document.querySelector(selector);
    return element.classList.contains('hide');
  }

  scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      const pos = element.getBoundingClientRect();
      window.scrollTo({
        top: pos.top + window.pageYOffset - this.getNavHeight(),
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  _initTimeago() {
    if (!window.timeago) return;

    const elements = document.querySelectorAll('.timeago');
    if (elements.length > 0) {
      timeago.render(elements);
    }
  }

  _initMermaid() {
    if (!window.mermaid) return;

    mermaid.initialize({
      flowchart: {
        useMaxWidth: true,
      },
      gantt: {
        numberSectionStyles: 4,
        axisFormat: '%m-%d',
      },
      sequence: {
        showSequenceNumbers: true,
      },
    });
  }

  _initPlantUML() {
    const elements = document.querySelectorAll('.plantuml');
    if (elements.length == 0) return;

    if (!window.plantumlEncoder) return;

    elements.forEach((v) => {
      const encoded = plantumlEncoder.encode(v.textContent);
      const src = '//www.plantuml.com/plantuml/svg/' + encoded;
      v.innerHTML = '<img src="' + src + '" />';
    });
  }

  _initQuill() {
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
      <h2>Example title</h2>
      <p>Write the cover letter...<p>
      <h2>Your CV</h2>
      <p><a href="#">https://example.com/path/to/your/cv.pdf</a></p>
    `;
  }
}

const util = new Util();
util._initTimeago();
util._initMermaid();
util._initPlantUML();
util._initQuill();
