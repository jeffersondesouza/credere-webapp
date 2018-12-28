const CustumerHeader = ((customer) => {


  function location(city, state) {
    return document.createTextNode(`${city ? city : 'cidade não informada'}, ${state}`);
  }

  function email(emails) {

    if (!emails || !emails.length) {
      return document.createTextNode('Nenhum email cadastrado');
    }

    const mainEmail = emails.find(email => email.main) || emails[0];
    return document.createTextNode(mainEmail.address);
  }

  function phoneNumber(phones) {
    if (!phones || !phones.length) {
      return document.createTextNode('Nenhum telefone cadastrado');
    }
    const mainPhone = phones.find(phone => phone.main) || phones[0];

    return document.createTextNode(`(${mainPhone.code})-${mainPhone.number}`);
  }

  function icon(iconClass) {
    return DomElement({
      tag: 'i',
      attributes: {
        class: iconClass,
      },
    });
  }

  function phoneEl(phones) {
    return DomElement({
      tag: 'p',
      content: [icon('icon-phone'), phoneNumber(phones)],
      attributes: {
        class: "customer__contact-phone",
      },
    });
  }


  function emailEl(emails) {
    return DomElement({
      tag: 'p',
      content: [icon('icon-mail'), email(emails)],
      attributes: {
        class: "customer__contact-email",
      },
    });
  }


  function buildCustomerContactheader(customer) {

    return DomElement({
      tag: 'header',
      content: [phoneEl(customer.phones), emailEl(customer.emails)],
      attributes: {
        class: "customer__contact-header",
      },
    });
  }



  function buildCustomerContactLocation(customer) {

    return DomElement({
      tag: 'p',
      content: [icon('icon-location'), location(customer.city, customer.state)],
      attributes: {
        class: "customer__contact-location",
      },
    });
  }


  function buildCustomerContact(customer) {

    return DomElement({
      tag: 'div',
      content: [buildCustomerContactheader(customer), buildCustomerContactLocation(customer)],
      attributes: {
        class: "customer__contact",
      },
    });
  }



  return buildCustomerContact(customer);

});