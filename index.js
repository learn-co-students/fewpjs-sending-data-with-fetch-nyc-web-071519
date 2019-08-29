
const body = document.querySelector('body')
function submitData(name, email){
 return fetch ("http://localhost:3000/users", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    body: JSON.stringify({
          "name" : name,
          "email" : email
    })
 }).then(function(response) {
     if (response.ok) {
        return response.json();
     }
     throw response
  })
  .then(function(object) {
    console.log(object.id)
    body.insertAdjacentHTML('beforeend', ` ${object.id}`);
  })
  .catch(function(error) {
      console.log(error.message, 'asdbowuoque');
    body.insertAdjacentHTML('beforeend', `${error.message}`);
  });
};