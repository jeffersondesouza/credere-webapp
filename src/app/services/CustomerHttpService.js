const CustomerHttpService = (() => {

  const path = 'customers';
  const httpServer = HttpService();

  function save(customer) {
    if (!customer) {
      throw new Error('No custumer informed')
    }
    return httpServer.post(path, customer)
      .then(res => {
        console.log('res', res);
        
        return res;
      })
      .catch(err => err);
  }

  function getAll() {
    return httpServer.get(path)
      .then(res => res)
      .catch(err => err);
  }

  function getById(id) {
    if (!id) {
      throw new Error('No custumer id informed')
    }
    return httpServer.get(`${path}/${id}`)
      .then(res => res)
      .catch(err => err);
  }


  function update(id) {
    if (!id) {
      throw new Error('No custumer id informed')
    }
    return httpServer.patch(path, id)
      .then(res => res)
      .catch(err => err);
  }

  function remove(id) {
    if (!id) {
      throw new Error('No custumer id informed')
    }

    return httpServer.remove(path, id)
      .then(res => res)
      .catch(err => err);
  }


  return Object.create({
    getAll,
    getById,
    save,
    update,
    remove,
  })

});