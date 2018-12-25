/* A Classic!
  Notify it's Observers to perform an update with a status change
 */
const Subject = ((observersConst) => {

  let observers = observersConst ? [...observersConst] : [];

  /**
   * @param {*} observer {fn: update} 
   */
  function addObserver(observer) {
    observers.push(observer);
  }

  /**
   * @param {*} model 
   * all Observers will be notified en make an update templates
   */
  function notify(model) {
    observers.forEach(observer => observer.update(model));
  }

  return Object.create({
    addObserver,
    notify,
  })

}); 