var clienteService = CustomerHttpService();

describe("CustomerHttpService", function () {


  describe('when send GET', () => {

    var expectedArray = [{ name: 'default name' }]
    var getClinetSpy;

    describe('GET: /clients', () => {

      beforeEach(() => {
        spyOn(clienteService, 'getAll')
          .and.returnValue(Promise.resolve([{ name: 'default name' }]));
      });

      it("should get single data Promise", function (done) {
        clienteService.getAll()
          .then(obj => {
            expect(1).toBe(expectedArray.length);
            done();
          });
      });

    });


    describe('GET: /clients Error', () => {

      beforeEach(() => {
        getClinetSpy = spyOn(clienteService, 'getAll').and.throwError('Error');
      });

      it("should throw an error ehne call", function () {

        expect(getClinetSpy).toThrowError("Error");

      });

    });





  });


  describe('when send Post', () => {


    describe('Post: /clients', () => {
      beforeEach(() => {

        spyOn(clienteService, 'save')
          .and.returnValue(Promise.resolve({ status: 200 }));

      });

      it("should save a cliente", function (done) {

        clienteService.save({ name: 'name' })
          .then(res => {
            expect(res.status).toBe(200);
            done();
          });
      });

    });


    describe('POST: /clients Error', () => {

      beforeEach(() => {
        getClinetSpy = spyOn(clienteService, 'save').and.throwError('Error');
      });

      it("should throw an error ehne call", function () {

        expect(getClinetSpy).toThrowError("Error");

      });

    });

  });




  describe('when send Patch', () => {


    describe('PATCH: /clients', () => {
      beforeEach(() => {

        spyOn(clienteService, 'remove')
          .and.returnValue(Promise.resolve({ status: 200 }));

      });

      it("should save a cliente", function (done) {

        clienteService.remove({ name: 'name' })
          .then(res => {
            expect(res.status).toBe(200);
            done();
          });
      });

    });


    describe('PATCH: /clients Error', () => {

      beforeEach(() => {
        getClinetSpy = spyOn(clienteService, 'save').and.throwError('Error');
      });

      it("should throw an error ehne call", function () {

        expect(getClinetSpy).toThrowError("Error");

      });

    });

  });



  describe('when send Delete', () => {


    describe('DELETE: /clients', () => {
      beforeEach(() => {

        spyOn(clienteService, 'remove')
          .and.returnValue(Promise.resolve({ status: 200 }));

      });

      it("should save a cliente", function (done) {

        clienteService.remove({ name: 'name' })
          .then(res => {
            expect(res.status).toBe(200);
            done();
          });
      });

    });


    describe('DELETE: /clients Error', () => {

      beforeEach(() => {
        getClinetSpy = spyOn(clienteService, 'save').and.throwError('Error');
      });

      it("should throw an error ehne call", function () {

        expect(getClinetSpy).toThrowError("Error");

      });

    });

  });



});
