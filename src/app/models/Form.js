const Form = ((formViewSelector) => {
  function formElement(selector) {
    return document.querySelector(selector);
  }

  return Object.create({
    form: document.querySelector(formViewSelector),
    idEl: formElement('#id'),
    nameEl: formElement('#name'),
    birthdayEl: formElement('#birthday'),
    licenseIdEl: formElement('#licenseId'),
    licenseNumberEl: formElement('#licenseDate'),
    licenseIssueAtEl: formElement('#licenseIssueAt'),
    licenseDestroyEl: formElement('#licenseDestroy'),
    stateEl: formElement('#state'),
    cityEl: formElement('#city'),
    phonesEl: formElement('#phones'),
    emailsEl: formElement('#emails'),
    parentIdEl: formElement('#parentId'),
    parentNameEl: formElement('#parentName'),
    parentPhoneIdEl: formElement('#parentPhoneId'),
    parentPhoneCodeEl: formElement('#parentPhoneCode'),
    parentPhoneNumberEl: formElement('#parentPhoneNumber'),
    parentDestroyEl: formElement('#parentDestroy'),
    addMorePhonesBtn: formElement('#addMorePhonesBtn'),
    addMoreEmailBtn: formElement('#addMoreEmailBtn'),
    nameValidation: formElement('#nameValidation'),
    birthdayValidation: formElement('#birthdayValidation'),
    licenseValidation: formElement('#licenseValidation'),
    stateValidation: formElement('#stateValidation'),
    cityValidation: formElement('#cityValidation'),
    minPhoneValidation: formElement('#minPhoneValidation'),
    maxPhoneValidation: formElement('#maxPhoneValidation'),
    minEmailValidation: formElement('#minEmailValidation'),
    maxEmailValidation: formElement('#maxEmailValidation'),
    parentNameValidation: formElement('#parentNameValidation'),
    parentPhoneValidation: formElement('#parentPhoneValidation'),
    phoneValidation: formElement('#phoneValidation'),
  });

});