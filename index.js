import { Script } from "vm";

// post
function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };
  let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(formData)
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
      return response.json();
    })
    .then(function(objectResponse) {
      let id = objectResponse.id;
      let newelement = document.createTextNode(`${id}`);

      document.body.appendChild(newelement);
    })
    .catch(function(error) {
      let er = error.message;
      let domError = document.createTextNode(`${er}`);
      document.body.appendChild(domError);
    });
}
