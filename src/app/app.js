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
