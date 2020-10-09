const requestOptions = {
  method: 'GET'
};

fetch("https://8d609af6-394a-4bc4-a2a4-216f801f7ecd.mock.pstmn.io/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
