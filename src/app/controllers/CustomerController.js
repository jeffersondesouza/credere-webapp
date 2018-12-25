const CustomerController = (() => {

  /** o subject notificará seus obserevers (elementes da página) a se atualizarem quando chamamos o método notify/*/
  const customerApi = CustomerHttpService();

  const custumersSubject = Subject();
  const msgSubject = Subject();

  custumersSubject.addObserver(CustomersListView('#customers-view'))
  msgSubject.addObserver(RegisterFeedback('#customer-crud-msg-view'));

  let customers = [];

  function notify(model) {
    custumersSubject.notify(model)
  }

  function notifyMsg(msg) {
    msgSubject.notify(msg)
  }

  function getAllCustomers() {
    return customerApi.getAll()
      .then(customersRes => {
        customers = [...customersRes];
        notify(customersRes);
      })
      .catch(err => notify(err))
  }

  function save(data) {

    if (data.id) {
      return customerApi.update(data)
        .then(() => getAllCustomers())
        .then(() => notifyMsg('Usuário editado com sucesso'))
        .catch(err => notify(err))
    }

    return customerApi.save(data)
      .then(() => getAllCustomers())
      .then(() => notifyMsg('Usuário criado com sucesso!!!!!'))
      .catch(err => notify(err));
  }

  function remove(id) {
    return customerApi.remove(id)
      .then(() => getAllCustomers())
      .catch(err => notify(err))
  }

  function getEditingCustomer(id) {
    return customers.find(customer => +customer.id === +id);
  }

  return Object.create({
    customerApi,
    getAllCustomers,
    save,
    remove,
    getEditingCustomer,

  });

});