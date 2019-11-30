import 'es6-promise';
import 'whatwg-fetch';

function getyAsync(request) {
  return fetch("http://private-ad76d-test20053.apiary-mock.com/service-test",request)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    return json;
  });
}

export default {
    getyAsync
  };