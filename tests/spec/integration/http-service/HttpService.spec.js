var http = HttpService();

describe("HttpService", function () {


  describe('when send GET', () => {

    var expectedObj = { name: 'default name' }
    var expectedArray = [{ name: 'default name' }]
    var xhr = new XMLHttpRequest();


    describe('GET: /client', () => {
      var getClinetSpy;

      beforeEach(() => {
        getClinetSpy = spyOn(http, 'get').and.returnValue(Promise.resolve({ name: 'default name' }));
      });

      it("should get single data Promise", function (done) {
        http.get('/cliente')
          .then(obj => {
            expect(obj.name).toBe(expectedObj.name);
            done();
          });
      });

    });
  });

});
