import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(setToLocaleStorage, 500));
form.addEventListener('submit', clearFunction);

function setToLocaleStorage(event) {
  let inputName = event.target.name;
  formData[inputName] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function clearFunction(event) {
  event.preventDefault();
  console.log(formData);
  formData = {};
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
refreshForm();
function refreshForm() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;
    formData = JSON.parse(savedData);
    Object.entries(formData).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch ({ message }) {
    console.log(message);
  }
}
