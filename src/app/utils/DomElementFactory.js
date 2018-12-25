const DomElement = (({ tag, content, attributes, value }) => {

  const el = document.createElement(tag);

  function _build(domElement, { attributes, content, value }) {
    _setAtributes(domElement, attributes);
    _setContent(domElement, content);

    if (value !== null && value !== undefined) {
      el.value = value;
    }

    return domElement;
  }

  function _setAtributes(domElement, attributes) {
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        domElement.setAttribute(key, attributes[key]);
      }
    }
  }

  function _setContent(domElement, content) {

    if (!content) {
      return;
    }

    if (typeof content === 'string') {
      domElement.appendChild(document.createTextNode(content));
    } else {

      if (Array.isArray(content)) {

        content.forEach(contentItem => {
          domElement.appendChild(contentItem);
        });

      } else {
        domElement.appendChild(content);
      }

    }
  }


  return _build(el, { content, attributes, value });

});
