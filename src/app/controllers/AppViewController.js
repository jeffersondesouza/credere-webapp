const AppViewController = (({formController, customersView}) => {

  function onInit(callback) {
    callback();
  }


  function onSubmit(submitCallback) {
    return formController.onSubmit(formValue => {
        submitCallback(formValue)
          .then(() => formController.reset());
      });
  }


  function onDelete(cb) {
    return customersView.addEventListener('click', e => {
      if (e.target.type === 'button' && e.target.name === 'delete') {
        const consfirmAction = confirm('Tem certeza que deseja excluir o usuário?');
        if (consfirmAction) {
          cb(e.target.value);
        }
      }
    })
  }

  function onSendToEdit(getUserFn) {
    return customersView.addEventListener('click', e => {
      if (e.target.type === 'button' && e.target.name === 'edit') {
        const editingUser = getUserFn(e.target.value);
        formController.reset(editingUser);
      }
    })
  }

  return Object.create({
    onInit,
    onSubmit,
    onDelete,
    onSendToEdit
  });

});