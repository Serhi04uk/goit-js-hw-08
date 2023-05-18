import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener(
  'input',
  throttle(function onFormInput(event) {
    const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    data[event.target.name] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 2000)
);
formEl.addEventListener('submit', onFormSubmit);

function updateForm() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data !== null) {
    formEl.email.value = data.email || '';
    formEl.message.value = data.message || '';
  }
}

updateForm();

function onFormSubmit(event) {
  event.preventDefault();
  formEl.reset();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}
