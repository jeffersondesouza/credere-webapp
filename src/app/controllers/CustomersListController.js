const CustomersListController = ((listSelector) => {
  if (!listSelector) {
    throw new Error('Inform the Form View Selector. id, class...')
  }

  const customersListController = document.querySelector('#customers-view')

  function isDeletingEvent(e){
    return e.target.type === 'button' && e.target.name === 'delete'
  } 

  function isEditingEvent(e){
    return e.target.type === 'button' && e.target.name === 'edit'
  } 

  function onDelete(cb) {
    return customersListController.addEventListener('click', e => {
      if (isDeletingEvent(e)) {
        const consfirmAction = confirm('Tem certeza que deseja excluir o usuário?');
        if (consfirmAction) {
          cb(e.target.value);
        }
      }
    })
  }

  function onSendToEdit(sendToEditCb) {
    return customersListController.addEventListener('click', e => {
      if (isEditingEvent(e)) {
        sendToEditCb(e.target.value);
      }
    })
  }

  return {
    onDelete,
    onSendToEdit
  }

});