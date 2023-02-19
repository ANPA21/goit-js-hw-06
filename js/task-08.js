const refs = {
  form: document.querySelector(".login-form"),
  email: document.querySelector('input[name="email"]'),
  password: document.querySelector('input[name="password"]'),
  btn: document.querySelector(".login-form > button"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("Bсе поля должны быть заполнены");
  } else {
    console.log(formData);

    refs.form.reset();
  }
}
