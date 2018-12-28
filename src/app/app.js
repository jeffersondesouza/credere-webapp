(function () {


  const customerController = CustomerController();

  const appViewController = AppViewController({
    formController: FormController('#form-view'),
    customersView: document.querySelector('#customers-view')
  });

  appViewController
    .onInit(customerController.getAllCustomers);

  appViewController
    .onSubmit(customerController.save)


  appViewController
    .onDelete(customerController.remove);

  appViewController
    .onSendToEdit(customerController.getEditingCustomer);

})();
