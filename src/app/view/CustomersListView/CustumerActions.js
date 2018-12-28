const CustumerActions = ((customerId) => {

  function buildIcon(iconClass, name, customerId) {

    return DomElement({
      tag: 'i',
      attributes: {
        class: iconClass,
        name: name,
        value: customerId
      },
    });
  }

  function buildCustumerActions(customerId) {
    const editButton = DomElement({
      tag: 'button',
      attributes: {
        class: "btn btn--round btn--icon btn--edit icon-pencil",
        type: "button",
        name: "edit",
        value: customerId
      },
    });

    const deleteButton = DomElement({
      tag: 'button',
      attributes: {
        class: "btn btn--round btn--icon btn--danger icon-trash",
        type: "button",
        name: "delete",
        value: customerId
      },
    });

    return DomElement({
      tag: 'div',
      attributes: { class: 'customer__actions' },
      content: [editButton, deleteButton]
    });
  }


  return buildCustumerActions(customerId);

});