const CustomersListView = ((viewSelector) => {


  function buildList(model) {

    if (!Array.isArray(model)) {
      return;
    }

    const cutomersEl = model.map(customer => {

      const name = DomElement({
        tag: 'span',
        content: customer.name,
      });



      const btnDelete = DomElement({
        tag: 'span',
        attributes: {
          type: 'button',
          name: 'delete',
          value: customer.id,
        },
        content: 'Deletar'
      });

      const btnEdit = DomElement({
        tag: 'span',
        attributes: {
          type: 'button',
          name: 'edit',
          value: customer.id,
        },
        content: 'Editar'
      });

      const li = DomElement({
        tag: 'li',
        attributes: { id: customer.id, class: 'customers__item' },
        content: [name, btnEdit, btnDelete]
      });


      return li;
    });


    return cutomersEl;


  }

  function template(model, msg) {

    if (model.error) {
      return (`<p>Não foi possível recuperar os Clientes, Tente Mais tarde</p>`)
    } else if (model.length === 0) {
      return (`<p>Nenhum Cliente Cadastrado</p>`)
    }

    /*     const ul = DomElement({
          tag: 'ul',
          attributes: { class: 'customers' },
          content: buildList(model)
        }); */


    return (`
      <ul class="customers">${model.map(customer => `
        <li class="customers__item" id={${customer.id}}>
          ${customer.name}
          <button class="btn btn--icon" type="button" name="edit" value="${customer.id}"><i class="icon-pencil"></i></button>
          <button class="btn btn--icon" type="button" name="delete" value="${customer.id}"><i class="icon-trash"></i></button>
        </li>
      `).join('')}</ul>
    `);

  }

  return Object.assign(ObserverView(viewSelector), { template });

});