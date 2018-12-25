/**
 * to facilitate the manipulation of the Values of the input fields,
 *  we used the document create to generate these components 
 */
const PhoneInputView = ((idValue, codeValue, numberValue) => {

  function template() {
    /* TARGET
        <li class="phones__item">
          <input type="checkbox" class="phone-item__remove-check" />
          <div class="phone">
            <input class="input phone__code" placeholder="88" />
            <input class="input phone__number" placeholder="8899-7766" />
            <label class="phone__main">
              <input type="radio" class="phone__radio" />
              Principal
            </label>
          </div>
        </li>
     */
    const removePhone = DomElement({
      tag: 'input',
      attributes: {
        type: 'checkbox',
        class: "phones__remove-check"
      },
    });

    const idInput = DomElement({
      tag: 'input',
      value: idValue,
      attributes: {
        hidden: true
      },
    });

    const inputCode = DomElement({
      tag: 'input',
      value: codeValue,
      attributes: {
        class: 'input phone__code',
        placeholder: '88'
      },
    });

    const inputPhone = DomElement({
      tag: 'input',
      value: numberValue,
      attributes: {
        class: 'input phone__number',
        placeholder: '8888-8888'
      },
    });

    const mainPhoneRadio = DomElement({
      tag: 'input',
      attributes: {
        class: 'phone__radio',
        type: 'radio', name: 'mainFone'
      },
    });

    const mainPhoneLabel = DomElement({
      tag: 'span',
      content: 'Principal'
    });

    const mainPhoneWrap = DomElement({
      tag: 'label',
      content: [mainPhoneRadio, mainPhoneLabel],
      attributes: {
        class: 'phone__main-phone'
      },
    });

    const phoneDiv = DomElement({
      tag: 'div',
      content: [inputCode, inputPhone, mainPhoneWrap],
      attributes: {
        class: 'phone'
      },
    });

    const li = DomElement({
      tag: 'li',
      content: [idInput, removePhone, phoneDiv],
      attributes: {
        class: 'phones__item'
      }
    });

    return li;
  }

  return template();
});