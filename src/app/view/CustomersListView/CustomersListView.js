const CustomersListView = ((viewSelector) => {

  function buildList(model) {

    if (!Array.isArray(model)) {
      return;
    }

    const customersList = model.map(customer => {

      const customerInfoWrapper = DomElement({
        tag: 'div',
        content: [CustumerHeader(customer), CustumerContacts(customer)],
        attributes: {
          class: "customer__info"
        },
      });

      const li = DomElement({
        tag: 'li',
        attributes: { id: customer.id, class: 'customer' },
        content: [customerInfoWrapper, CustumerActions(customer.id)]
      });

      return li;
    });

    return customersList;

  }






  function template(model, msg) {

    if (model.error) {
      return (`<p>Não foi possível recuperar os Clientes, Tente Mais tarde</p>`)
    } else if (model.length === 0) {
      return (`<p>Nenhum Cliente Cadastrado</p>`)
    }

    const ul = DomElement({
      tag: 'ul',
      attributes: { class: 'customers' },
      content: buildList(model)
    });


    return ul;

    /* 
        
        return (`
          <ul class="customers">${model.map(customer => `
            <li class="customer" id={${customer.id}}>
              <div class="customer__info">
                <header class="customer__header">
                  <h3 class="customer__title">${customer.name}</h3>
                  <div class="customer__licence">
                    ${customer.driver_license ? (`
                      <p title="licença"><i class="icon-address-card-o customer__licence-icon"></i>${customer.driver_license ? (customer.driver_license.number) : ''}</p>
                      <p title="Data de Emissão"><i class="icon-calendar-empty customer__licence-icon"></i>${customer.driver_license ? (customer.driver_license.issued_at) : ''}</p>  
                    `) : ''}
                  </div>    
                </header>
                <div class="customer__contact">
                  <div class="customer__contact-header">
                    <p class="customer__contact-phone"><i class="icon-phone"></i>${phoneNumber(customer.phones)}</p>
                    <p class="customer__contact-email"><i class="icon-mail"></i>${email(customer.emails)}</p>
                  </div>
                  <p class="customer__contact-location"><i class="icon-location "></i>${location(customer.city, customer.state)}</p>            
                </div>
              </div>
    
              <div class="customer__actions">
                <button class="btn btn--round btn--icon btn--edit" type="button" name="edit" value="${customer.id}"><i class="icon-pencil"></i></button>
                <button class="btn btn--round btn--icon btn--danger" type="button" name="delete" value="${customer.id}"><i class="icon-trash"></i></button>
              </div>
    
              </li>
          `).join('')}</ul>
        `); 
        
        
     */
  }

  return Object.assign(ObserverView(viewSelector), { template });

});