const RegisterFeedback = ((viewSelector) => {

  function template(model) {
    return (`
      <p>${model}</p>
    `);
  }

  return Object.assign(ObserverView(viewSelector), { template });

});