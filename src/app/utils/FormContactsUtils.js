const FormContactsUtils = (() => {
 
  function getPhonesList(phonesListEl) {
    const phonesNode = phonesListEl
      .querySelectorAll('li');

    const phones = Object.keys(phonesNode)
      .map(key => phonesNode[key])
      .map(li => ({
        id: li.querySelectorAll('input')[0].value,
        destroy: li.querySelectorAll('input')[1].checked,
        code: li.querySelectorAll('input')[2].value,
        number: li.querySelectorAll('input')[3].value,
        main_number: li.querySelectorAll('input')[4].checked
      }))
      .map(phone => {

        if (phone.id === null || phone.id === undefined || phone.id === 'undefined') {
          delete phone.id;
        }

        return phone;
      });

    return phones;
  }

  function getEmailList(emailEl) {
    const emailsNode = emailEl
      .querySelectorAll('li')

    const emails = Object.keys(emailsNode)
      .map(key => emailsNode[key])
      .map(li => ({
        id: li.querySelectorAll('input')[0].value,
        destroy: li.querySelectorAll('input')[1].checked,
        address: li.querySelectorAll('input')[2].value,
      }))
      .map(email => {
        if (email.id === null || email.id === undefined || email.id === 'undefined') {
          delete email.id;
        }
        return email;

      });

    return emails;
  }


  return {
    getEmailList,
    getPhonesList
  }
})();