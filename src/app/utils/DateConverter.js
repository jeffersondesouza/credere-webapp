const DateConverter = (() => {

  function toDateInputFormat(informedDate) {
    const splitedDate = informedDate.split('/');
    const date = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);
    return date.toISOString().split('T')[0];;
  }

  function toServerFormat(informed) {
    const splitedDate = informed.split('-');
    const date = new Date(splitedDate[0], splitedDate[1] - 1, splitedDate[2]);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  /*  we decided to create a Clusure between 'isOfAge' and 'isMoreThanYears', since the latter logic can be used in methods for calculating expiration of lynx to drive for example*/
  function isOfAge(birthYear) {
    return isMoreThanYears(birthYear, 18);
  }

  function isMoreThanYears(date, minYears) {
    const year = date.split('-')[0];
    const actualYear = new Date().getFullYear();
    return (actualYear - year) >= minYears;
  }

  return Object.create({
    toDateInputFormat,
    toServerFormat,
    isOfAge
  });
  
})()