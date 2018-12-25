const CustomerFormHelper = (() => {

  function formValueOnCreateFormat(formModel) {
    return {
      name: formModel.nameEl.value,
      birthday: DateConverter.toServerFormat(formModel.birthdayEl.value),
      driver_license: {
        number: formModel.licenseNumberEl.value,
        issued_at: formModel.licenseIssueAtEl.value,
      },
      state: formModel.stateEl.value,
      city: formModel.cityEl.value,
      phones: FormContactsUtils.getPhonesList(formModel.phonesEl),
      emails: FormContactsUtils.getEmailList(formModel.emailsEl),
      parent: { 
        name: formModel.parentNameEl.value,
        phone: {
          code: formModel.parentPhoneCodeEl.value,
          number: formModel.parentPhoneNumberEl.value
        }
      }
    }
  }

  function formValueOnEditFormat(formModel) {

    return {
      id: formModel.idEl.value,
      name: formModel.nameEl.value,
      birthday: DateConverter.toServerFormat(formModel.birthdayEl.value),
      driver_license: {
        id: licenseId.value,
        number: formModel.licenseNumberEl.value,
        issued_at: formModel.licenseIssueAtEl.value,
        destroy: formModel.licenseDestroyEl.checked
      },
      state: formModel.stateEl.value,
      city: formModel.cityEl.value,
      phones: FormContactsUtils.getPhonesList(formModel.phonesEl, true),
      emails: FormContactsUtils.getEmailList(formModel.emailsEl, true),
      parent: {
        id: formModel.parentIdEl.value,
        name: formModel.parentNameEl.value,
        destroy: formModel.parentDestroyEl.checked,
        phone: {
          id: formModel.parentPhoneIdEl.value,
          code: formModel.parentPhoneCodeEl.value,
          number: formModel.parentPhoneNumberEl.value
        }
      }
    }
  }


  function resetFormBasedOn(formModel, editingUser) {

    formModel.idEl.value = editingUser.id;
    formModel.nameEl.value = editingUser.name;
    formModel.birthdayEl.value = getBirthday(editingUser.birthday);
    formModel.stateEl.value = editingUser.state;
    formModel.cityEl.value = editingUser.city || '';

    if (editingUser.driver_license) {
      formModel.licenseIdEl.value = editingUser.driver_license.id
      formModel.licenseNumberEl.value = editingUser.driver_license.number;
      formModel.licenseIssueAtEl.value = editingUser.driver_license.issued_at;
      formModel.licenseDestroyEl.checked = false;
    } else {
      formModel.licenseNumberEl.value = '';
      formModel.licenseIssueAtEl.value = '';
      formModel.licenseDestroyEl.checked = false;
    }

    formModel.parentNameEl.value = '';
    formModel.parentPhoneCodeEl.value = '';
    formModel.parentPhoneNumberEl.value = '';
    if (editingUser.parent) {
      formModel.parentIdEl.value = editingUser.parent.id;
      formModel.parentNameEl.value = editingUser.parent.name;

      formModel.parentPhoneIdEl.value = editingUser.parent.phone.id;
      formModel.parentPhoneCodeEl.value = editingUser.parent.phone.code;
      formModel.parentPhoneNumberEl.value = editingUser.parent.phone.number;
      formModel.parentDestroyEl.checked = false;
    }

    formModel.phonesEl.innerHTML = '';
    formModel.emailsEl.innerHTML = '';
    appendPhoneInputs(formModel, formModel.phonesEl, editingUser.phones);
    appendEmailInputs(formModel, formModel.emailsEl, editingUser.emails);
  }

  function cleanForm(formModel) {
    formModel.idEl.value = '';
    formModel.nameEl.value = '';
    formModel.birthdayEl.value = '';
    formModel.stateEl.value = '';
    formModel.cityEl.value = '';
    formModel.licenseNumberEl.value = '';
    formModel.licenseIssueAtEl.value = '';
    formModel.licenseDestroyEl.checked = false;
    formModel.parentNameEl.value = '';
    formModel.parentPhoneCodeEl.value = '';
    formModel.parentPhoneNumberEl.value = '';
    formModel.parentIdEl.value = '';
    formModel.parentNameEl.value = '';
    formModel.parentPhoneIdEl.value = '';
    formModel.parentPhoneCodeEl.value = '';
    formModel.parentPhoneNumberEl.value = '';
    formModel.parentDestroyEl.checked = false;

    formModel.phonesEl.innerHTML = '';
    formModel.emailsEl.innerHTML = '';
    addPhoneInput(formModel.phonesEl);
    addEmailInput(formModel.emailsEl);
  }

  function getBirthday(birthday) {
    return DateConverter.toDateInputFormat(birthday);
  }

  function appendPhoneInputs(formModel, phonesEl, phones) {
    formModel.phonesEl.innerHTML = '';
    phones.forEach(phone => addPhoneInput(phonesEl, phone.id, phone.code, phone.number));
  }

  function appendEmailInputs(formModel, emailsEl, emails) {
    formModel.emailsEl.innerHTML = '';
    emails.forEach(email => addEmailInput(emailsEl, email.id, email.address));
  }


  function addPhoneInput(parentNode, idValue, codeValue, numberValue) {

    parentNode.appendChild(PhoneInputView(idValue, codeValue, numberValue));
  }

  function addEmailInput(parentNode, idValue, value) {
    parentNode.appendChild(EmailInputView(idValue, value));
  }

  return Object.create({
    resetFormBasedOn,
    cleanForm,
    formValueOnEditFormat,
    formValueOnCreateFormat,
    addEmailInput,
    addPhoneInput
  })
})();