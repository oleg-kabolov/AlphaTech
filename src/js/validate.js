function validateForm(formSelector) {
  const form = document.forms(formSelector);
  const formElements = form.elements;

  const name = formElements["name"].value;
  const email = formElements["email"].value;
  const phone = formElements["phone"].value;
  const message = formElements["message"].value;

  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const phoneRegexp =
    /^\+?[0-9]{1,3}\(?([0-9]{3})?\)?\s?[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Заполните все поля!");
  }

  if (!emailRegexp.test(email)) {
    alert("Введите корректный email!");
  } else if (email.length < 8 || email.length > 16) {
    alert("Ваш email должен содержать не менее 8");
  } else if (email.length > 16) {
    alert("Ваш email должен содержать не более 16 символов");
  }

  if (!phoneRegexp.test(phone)) {
    alert(
      "Введите корректный номер телефона используя формат +7 (999) 999-99-99"
    );
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  console.log(formElements);
}

export { validateForm };
