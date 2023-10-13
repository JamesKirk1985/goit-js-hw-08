const form = document.querySelector('.feedback-form');

// if(localStorage.getItem('feedback-form-state').) {};
form.addEventListener('input', setToLocaleStorage);

let obj = localStorage.getItem('feedback-form-state');

form.email.value = JSON.parse(obj).email;
form.message.value = JSON.parse(obj).message;
const userValue = {};
function setToLocaleStorage(event) {
  let inputName = event.target.name;

  userValue[inputName] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userValue));
  console.log(localStorage.getItem('feedback-form-state'));
  return;
}
