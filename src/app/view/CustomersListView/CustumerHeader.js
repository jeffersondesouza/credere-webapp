const CustumerHeader = ((customer) => {


  function icon(iconClass) {
    return DomElement({
      tag: 'i',
      attributes: {
        class: iconClass,
      },
    });
  }

  function customerLicense(customer) {

    if (customer.driver_license) {

      const licence = DomElement({
        tag: 'p',
        content: [icon('icon-address-card-o customer__licence-icon'), document.createTextNode(customer.driver_license.number)],
        attributes: {
          class: "customer__title",
          title: 'licence'
        },
      });


      const issuedAt = DomElement({
        tag: 'p',
        content: [icon('icon-calendar-empty customer__licence-icon'), document.createTextNode(customer.driver_license.issued_at)],
        attributes: {
          class: "customer__title",
          title: 'licence'
        },
      });


      return DomElement({
        tag: 'div',
        content: [licence, issuedAt],
        attributes: {
          class: "customer__licence",
        },
      });

    }

    return DomElement({
      tag: 'div',
      content: '',
      attributes: {
        class: "customer__title",
      },
    });


  }

  function custumerHeaderTitle(customer) {

    return DomElement({
      tag: 'h3',
      content: customer.name,
      attributes: {
        class: "customer__title",
      },
    });
  }


  function buildCustumerHeader(customer) {

    return DomElement({
      tag: 'header',
      content: [custumerHeaderTitle(customer), customerLicense(customer)],
      attributes: {
        class: "customer__header",
      },
    });
  }



  return buildCustumerHeader(customer);

});