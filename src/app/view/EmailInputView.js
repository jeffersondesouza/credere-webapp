/**
 * to facilitate the manipulation of the Values of the input fields,
 *  we used the document create to generate these components 
 */
const EmailInputView = ((idValue, value) => {

  function template() {

    const idInput = DomElement({
      tag: 'input',
      value: idValue,
      attributes: {
        hidden: true
      },
    });

    const removeEmail = DomElement({
      tag: 'input',
      attributes: {
        type: 'checkbox',
        class: "emails__item-remove"
      },
    });
    const inputEmail = DomElement({
      tag: 'input',
      value: value,
      attributes: {
        type: 'email',
        class: "input"
      },
    });

    const li = DomElement({
      tag: 'li',
      content: [idInput, removeEmail, inputEmail],
      attributes: {
        class: "emails__item"
      },
    });




    return li;
  }

  return template();
});