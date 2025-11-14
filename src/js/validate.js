clearTooltips();

function validateForm(formSelector) {
  const form = document.querySelector(formSelector);
  const formElements = form.elements;

  const name = formElements["name"].value;
  const email = formElements["email"].value;
  const phone = formElements["phone"].value;
  const message = formElements["message"].value;

  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const phoneRegexp = /^\+?[1-9]{1,4}?[0-9]{3}?[0-9]{3}?[0-9]{2}?[0-9]{2}$/;

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
}

function validateInput(inputs) {
  const name = inputs.name;
  const email = inputs.email;
  const phone = inputs.phone;
  const message = inputs.message;

  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

  const phoneRegexp = /^\+?[0-9]{1,3}?[0-9]{3}?[0-9]{3}[0-9]{2}[0-9]{2}$/;

  if (email === "" || phone === "") {
    alert("Заполните поля!");
    return false;
  } else {
    console.log("Запрос отправлен");
  }

  if (!emailRegexp.test(email)) {
    alert("Введите email корректно в формате _______@mail.com");
    return false;
  }

  if (!phone && !phoneRegexp.test(phone)) {
    console.log(phone);
    alert(
      "Введите корректный номер телефона используя формат +7 (999) 999-99-99"
    );
    return false;
  }
  return true;
}

function clearTooltips() {
  const tooltips = document.querySelectorAll(".tooltip");
  tooltips.forEach((tooltip) => {
    tooltip.style.display = "none";
    tooltip.textContent = "";
  });
}

function showTooltip(input, message) {
  const tooltip = input.nextElementSibling;
  tooltip.textContent = message;
  tooltip.style.display = "block";
}
export { validateForm, validateInput };

// Рекомендации по реализации

// Структура проекта:

// Разделите код на модули (Webpack позволяет это сделать):
// formHandler.js: Обработка полей и отправка данных.
// validation.js: Правила валидации.
// api.js: Логика отправки данных через fetch.

// Обработка форм:
// Используйте атрибуты data-* для определения типа формы (например, data-form-type="type1").
// В зависимости от типа формы применяйте соответствующие правила валидации и сбора данных.

// Валидация:
// Вынесите валидацию в отдельную функцию или класс.
// Реализуйте базовые проверки (например, "поле не пустое", "корректный email", "корректный телефон").
// Добавьте возможность расширения правил валидации.
// Отправка данных:
// Используйте fetch для отправки данных на сервер.
// Добавьте обработку ошибок (например, показывать сообщение об ошибке, если сервер недоступен).

// Оптимизация:
// Используйте Webpack для минификации и упаковки кода.
// Если проект маленький, можно использовать один файл для всех форм, но разделить логику на модули.
// Заключение
// Для вашего случая (три формы на одностраничном лендинге) лучше всего подходит комбинированный

// подход:

// Используйте функции для обработки данных и отправки запросов.
// Вынесите валидацию в отдельный модуль.
// Разделите код на логические части с помощью Webpack.
// Этот подход обеспечивает баланс между простотой реализации и гибкостью, что особенно важно для небольших проектов.
