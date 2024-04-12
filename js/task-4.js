const loginFormEl = document.querySelector('.login-form');

const handleSubmit = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const formDataObj = {};

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  formDataObj.email = email.trim();
  formDataObj.password = password.trim();

  console.log(formDataObj);
  form.reset();
};

loginFormEl.addEventListener('submit', handleSubmit);
