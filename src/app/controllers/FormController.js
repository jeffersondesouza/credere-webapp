const FormController = ((formViewSelector) => {
  if (!formViewSelector) {
    throw new Error('Inform the Form View Selector. id, class...')
  }

  const formModel = Form(formViewSelector);

  onInit();

  function onInit() {
    CustomerFormHelper.addPhoneInput(formModel.phonesEl);
    CustomerFormHelper.addEmailInput(formModel.emailsEl);
    formModel.addMorePhonesBtn.addEventListener('click', () => CustomerFormHelper.addPhoneInput(formModel.phonesEl));
    formModel.addMoreEmailBtn.addEventListener('click', () => CustomerFormHelper.addEmailInput(formModel.emailsEl));
  }

  function onSubmit(submitCallback) {
    formModel.form.addEventListener('submit', e => {
      e.preventDefault();
      if (validateForm(formModel)) {
        submitCallback(getFormValue());
      }
    });
  }

  function getFormValue() {
    if (formModel.idEl.value) {
      return CustomerFormHelper.formValueOnEditFormat(formModel)
    }
    return CustomerFormHelper.formValueOnCreateFormat(formModel);
  }


  function validateForm(formModel) {
    return CustomerFormValidator(formModel).validateForm();
  }

  
  function reset(editingUser) {
    if (editingUser) {
      CustomerFormHelper.resetFormBasedOn(formModel, editingUser)
    } else {
      CustomerFormHelper.cleanForm(formModel);
    }
  }

  return Object.create({
    getFormValue,
    reset,
    onSubmit
  });

});