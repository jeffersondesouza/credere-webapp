(function () {

  const appViewController = AppViewController({
    formController: FormController('#form-view'),
    customersListController:CustomersListController('#customers-view')
  });

  
  const customerController = CustomerController();


  appViewController
    .onInit(customerController.getAllCustomers);

  appViewController
    .onSubmit(customerController.save)


  appViewController
    .onDelete(customerController.remove);

  appViewController
    .onSendToEdit(customerController.getEditingCustomer);

})();
