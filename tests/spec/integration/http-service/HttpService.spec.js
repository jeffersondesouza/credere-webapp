var http = HttpService();

describe("HttpService", function () {


  describe('when send GET', () => {

    var expectedObj = { name: 'default name' }

    describe('GET: /client', () => {

      let getClinetSpy;
      beforeEach(() => {
        getClinetSpy = spyOn(http, 'get').and.returnValue(
          Promise.resolve({ name: 'default name' })
        );
      });

      it("should get single data Promise", function (done) {

        http.get('/client')
          .then(obj => {
            expect(obj.name).toBe(expectedObj.name);
            expect(getClinetSpy).toHaveBeenCalled();

            done();
          });
      });

    });


    describe('POST: /client', () => {
      var postClinetSpy;

      beforeEach(() => {
        postClinetSpy = spyOn(http, 'post').and.returnValue(
          Promise.resolve({ name: 'default name' })
        );
      });

      it("should get single data Promise", function (done) {

        http.post('/client')
          .then(obj => {
            expect(obj.name).toBe(expectedObj.name);
            expect(postClinetSpy).toHaveBeenCalled();
            done();
          });
      });

    });


    describe('DELETE: /client', () => {
      const deleteClinetSpy;

      beforeEach(() => {
        deleteClinetSpy = spyOn(http, 'delete').and.returnValue(
          Promise.resolve({ name: 'default name' })
        );
      });

      it("should get single data Promise", function (done) {

        http.delete('/client')
          .then(obj => {
            expect(obj.name).toBe(expectedObj.name);
            expect(deleteClinetSpy).toHaveBeenCalled();
            done();
          });
      });

    });


    describe('PATCH: /client', () => {
      const patchClinetSpy;

      beforeEach(() => {
        patchClinetSpy = spyOn(http, 'patch').and.returnValue(
          Promise.resolve({ name: 'default name' })
        );
      });

      it("should get single data Promise", function (done) {

        http.patch('/client')
          .then(obj => {
            expect(obj.name).toBe(expectedObj.name);
            expect(patchClinetSpy).toHaveBeenCalled();
            done();
          });
      });

    });

  });

});
