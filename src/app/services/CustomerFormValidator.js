const CustomerFormValidator = ((formModel) => {

  function validateForm() {

    let formHasErros = false;

    if (
      isNameValid()
      & isBirthDayValid()
      & isLicenseValid()
      & isStateValid()
      & isCityValid()
      & isPhonesValid()
      & isEmailsValid()
      & isParentValid()
    ) {
      formHasErros = true;
    } else {
      formHasErros = false;
    }

    return formHasErros
  }


  function isNameValid() {
    if (formModel.nameEl.value) {
      nameValidation.hidden = true;
      return true;
    }
    nameValidation.hidden = false;
    return false;
  }


  function isBirthDayValid() {
    if (formModel.birthdayEl.value) {
      birthdayValidation.hidden = true;
      return true;
    }
    birthdayValidation.hidden = false;
    return false;
  }


  function isLicenseValid() {
    licenseValidation.hidden = true;

    if (!formModel.birthdayEl.value) {
      return true
    }

    let customerAge = new Date().getFullYear() - new Date(formModel.birthdayEl.value).getFullYear();

    if (customerAge < 18) {
      return true
    }


    if (!formModel.licenseNumberEl.value || !formModel.licenseIssueAtEl.value) {
      licenseValidation.hidden = false;
      return false;
    }

    return true;
  }



  function isStateValid() {
    if (formModel.stateEl.value) {
      stateValidation.hidden = true;
      return true;
    }
    stateValidation.hidden = false;
    return false;
  }

  function isCityValid() {

    cityValidation.hidden = true;

    if (!formModel.stateEl.value || !formModel.licenseNumberEl.value) {
      return true;
    }

    const firstLicenseNumber = +`${formModel.licenseNumberEl.value}`[0];
    const isRn = formModel.stateEl.value.toLowerCase() === 'rn';

    if (!formModel.cityEl.value && isRn && (firstLicenseNumber === 6)) {
      cityValidation.hidden = false;
      return false;
    }

    return true;
  }


  function isPhonesValid() {
    const phones = FormContactsUtils.getPhonesList(formModel.phonesEl)
      .filter(phone => !phone.destroy);

    maxPhoneValidation.hidden = true;
    minPhoneValidation.hidden = true;
    phoneValidation.hidden = true;


    if (phones.length < 1) {
      minPhoneValidation.hidden = false;
      return false;
    }

    if (phones.length > 4) {
      maxPhoneValidation.hidden = false;
      return false;
    }


    if (phones.find(phone => !phone.code || !phone.number)) {
      phoneValidation.hidden = false;
      return false;
    }

    return true;

  }

  function isEmailsValid() {
    const emails = FormContactsUtils.getEmailList(formModel.emailsEl)
      .filter(email => !email.destroy && email.address);

    minEmailValidation.hidden = true;
    maxEmailValidation.hidden = true;


    if (emails.length < 1) {
      minEmailValidation.hidden = false;
      return false;
    }

    if (emails.length > 3) {
      maxEmailValidation.hidden = false;
      return false;
    }

    return true;
  }


  function isParentValid() {
    let nameError = false;
    let phoneError = false;

    parentNameValidation.hidden = true;
    parentPhoneValidation.hidden = true;


    if (!formModel.birthdayEl.value || DateConverter.isOfAge(formModel.birthdayEl.value)) {
      return true;
    }


    if (!formModel.parentNameEl.value) {
      parentNameValidation.hidden = false;
      nameError = true;
    } else {
      parentNameValidation.hidden = true;
    }

    if (!formModel.parentPhoneCodeEl.value || !formModel.parentPhoneNumberEl.value) {
      parentPhoneValidation.hidden = false;
      phoneError = true;
    } else {
      parentPhoneValidation.hidden = true;
    }

    return !nameError && !phoneError;

  }

  return Object.create({ validateForm })
});