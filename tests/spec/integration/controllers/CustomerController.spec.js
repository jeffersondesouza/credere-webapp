
describe("CustomerConctroller", function () {


  describe('getAllCustomers()', () => {

    const responseCustumers = [{ id: 1 }, { id: 2 }];

    const viewSubject = {
      notify() { }
    };

    const customerController = CustomerController();


    it("should get all cutuomers", function (done) {

      const notifySpy = spyOn(viewSubject, 'notify');

      const getAllCustomersSpy = spyOn(customerController, 'getAllCustomers').and
        .returnValue(Promise.resolve(responseCustumers));

      customerController.getAllCustomers()
        .then(res => {
        });
      expect(getAllCustomersSpy).toHaveBeenCalled();
      done();

    });


  });


  describe('save()', () => {

    const responseCustumers = [{ id: 1 }, { id: 2 }];

    const viewSubject = {
      notify() { }
    };


    const customerController = CustomerController(viewSubject);


    it("should save a cutomers", function (done) {

      // const notifySpy = spyOn(viewSubject, 'notify');

      const getAllCustomersSpy = spyOn(customerController, 'save').and
        .returnValue(Promise.resolve(responseCustumers));

      customerController.save()
        .then(res => {
          // expect(notifySpy).toHaveBeenCalled();
          done();
        });
      expect(getAllCustomersSpy).toHaveBeenCalled();
    });

  });


  describe('remove()', () => {

    const responseCustumers = [{ id: 1 }, { id: 2 }];

    const viewSubject = {
      notify() { }
    };

    const customerController = CustomerController(viewSubject);

    it("should save a cutomers", function (done) {

      const notifySpy = spyOn(viewSubject, 'notify');

      const getAllCustomersSpy = spyOn(customerController, 'remove').and
        .returnValue(Promise.resolve(responseCustumers));

      customerController.remove(123)
        .then(res => {
      //    expect(notifySpy).toHaveBeenCalledWith(responseCustumers);
        });
      expect(getAllCustomersSpy).toHaveBeenCalled();
      done();
    });

  });

});
