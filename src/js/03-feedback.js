import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const obj = JSON.parse(localStorage.getItem('feedback-form-state'));

if (obj) {
  if (obj.email) {
    form.email.value = obj.email;
  }
  if (obj.message) {
    form.message.value = obj.message;
  }
}

form.addEventListener('input', throttle(setToLocaleStorage, 500));
form.addEventListener('submit', clearFunction);

const userValue = {};
function setToLocaleStorage(event) {
  let inputName = event.target.name;
  userValue[inputName] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userValue));
  return;
}

function clearFunction(event) {
  const result = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log(result);
  event.preventDefault();
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
