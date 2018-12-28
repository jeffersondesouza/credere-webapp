const AppViewController = (({ formController, customersListController }) => {

  function onInit(callback) {
    callback();
  }


  function onSubmit(submitCallback) {
    return formController.onSubmit(formValue => {
      submitCallback(formValue)
        .then(() => formController.reset());
    });
  }


  function onDelete(deleteCustomerFn) {
    return customersListController.onDelete((userId) => {
      deleteCustomerFn(userId);
    });
  }


  function onSendToEdit(getUserFn) {
    return customersListController.onSendToEdit(customerId => {
      const editingUser = getUserFn(customerId);
      formController.reset(editingUser);
    });
  }

  return Object.create({
    onInit,
    onSubmit,
    onDelete,
    onSendToEdit
  });

});