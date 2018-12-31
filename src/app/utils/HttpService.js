const HttpService = (() => {

  const xhr = new XMLHttpRequest();
  // const baseUrl = 'http://localhost:3000';
  const baseUrl = 'https://credere-api-2.herokuapp.com';
  
  

  function get(path) {
    return new Promise((resolve, reject) => {
      xhr.open('GET', `${baseUrl}/${path}`);

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject({ error: xhr.status });
          }
        }
      }

      xhr.send();
    });
  }

  function post(path, data) {
    return new Promise((resolve, reject) => {
      xhr.open('POST', `${baseUrl}/${path}`, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(data));

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject({ error: xhr.status });
          }
        }
      }
    });
  }

  function patch(path, data) {
    return new Promise((resolve, reject) => {
      xhr.open('PATCH', `${baseUrl}/${path}/${data.id}`, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(data));

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject({ error: xhr.status });
          }
        }
      }
    });
  }

  function remove(path, id) {
    const url = `${baseUrl}/${path}/${id}`;

    return new Promise((resolve, reject) => {
      xhr.open('DELETE', url, true);

      xhr.onload = () => {
        console.log('xhr.status', xhr.status);
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject({ error: xhr.status });
          }
        }
      }

      xhr.send(null);
    });
  }

  return Object.create({
    get,
    post,
    remove,
    patch
  });
});