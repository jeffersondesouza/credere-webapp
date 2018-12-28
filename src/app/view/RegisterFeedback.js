const RegisterFeedback = ((viewSelector) => {

  function template(model) {
    return document.createTextNode(model);
  }

  return Object.assign(ObserverView(viewSelector), { template });

});