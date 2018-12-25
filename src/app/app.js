(function () {


  const customerController = CustomerController();

  const appViewController = AppViewController(FormController('#form-view'), document.querySelector('#customers-view'));

  appViewController
    .onInit(customerController.getAllCustomers);

  appViewController
    .onSubmit(customerController.save)


  appViewController
    .onDelete(customerController.remove);

  appViewController
    .onSendToEdit(customerController.getEditingCustomer);

})();


/* 




const buildElement = (({ tag, content, attributes }) => {

  const el = document.createElement(tag);

  function _build(domElement, { attributes, content }) {
    _setAtributes(domElement, attributes);
    _setContent(domElement, content);

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
    if (typeof content === 'string') {
      domElement.appendChild(document.createTextNode(content));
    } else {
      domElement.appendChild(content);
    }
  }

  return _build(el, { content, attributes });

});




const title = buildElement({
  tag: 'div',
  content: 'ola',
  attributes: { id: 'ola', class: 'size-big' }
});


const div = buildElement({
  tag: 'div',
  content: document.getElementById('lista'),
});



document.getElementById('main-header').appendChild(title);
document.getElementById('main-header').appendChild(div);




*/