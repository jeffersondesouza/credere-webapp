/* 
those kind of view act like an Observer, so they can be attached to a subject, 
and wer can notify then, for exemple, to update a list stat on gthe view 
 */
const ObserverView = ((viewSelector) => {

  domElement = document.querySelector(viewSelector);

  function update(model) {

    const firstChild = this.domElement.firstChild;
    if (firstChild) {
      this.domElement.replaceChild(this.template(model), firstChild);
    } else {
      this.domElement.appendChild(this.template(model));
    }
  }

  function template(model, msg) {
    throw new Error('abs method, created as a Template designe to be iherited')
  }

  return Object.create({
    domElement,
    update,
    template
  });

});
