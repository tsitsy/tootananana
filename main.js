let datafirstName = document.querySelector('#firstName');
let datalastName = document.querySelector('#lastName');
let dataAge = document.querySelector('#age');
let dataRole = document.querySelector('#role');
let dataBasePostValidation = document.querySelector('#validation')
dataBasePostValidation.addEventListener('click', dataBasePost)
function postData (dataBasePost){
  fetch("http://localhost:3000/users", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataBasePost),
})
}