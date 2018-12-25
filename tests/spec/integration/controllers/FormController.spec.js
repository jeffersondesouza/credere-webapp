describe("FormController", function () {

  let addPhoneSpy;
  let domSpy;
  let formController;


  beforeEach(() => {
    addPhoneSpy = spyOn(CustomerFormHelper, 'addPhoneInput').and.returnValue('phone');
    domSpy = spyOn(document, 'querySelector').and.returnValue(document.createElement('form'));
    formController = FormController('#form-view');
  });


  describe('init', function () {

    it('shoud trow an error if try creat a form component without the fomr selector', function () {
      expect(() => FormController()).toThrow(new Error('Inform the Form View Selector. id, class...'));
    });

  });

  describe('formElement', function () {
    it('shoud spec', function () {
      expect(domSpy).toHaveBeenCalled();
      expect(addPhoneSpy).toHaveBeenCalled();
    });
  });

});
