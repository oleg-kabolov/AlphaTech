import { sendClientData } from "./api";
import { validateInput } from "./validate";

const allForms = document.forms;

// Перебираем формы
for (let i = 0; i < allForms.length; i++) {
  const form = allForms[i]; // Текущая форма
  const input = form.querySelector("input");
  const inputName = form.querySelector("input[id^='name']");
  const inputEmail = form.querySelector("input[id^='email']");
  const inputPhone = form.querySelector("input[id^='phone']");
  const textareaMessage = form.querySelector("textarea");

  console.log(inputEmail);

  if (input) {
    console.log("Input found:", input);
  } else {
    console.log("No input found in form");
    continue; // Пропускаем форму, если в ней нет <input>
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Предотвращаем отправку формы

    const inputData = {
      phone: inputPhone.value,
      name: inputName.value,
      message: textareaMessage.value,
    };

    if (inputData.phone && inputData.name) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    if (validateInput(inputData)) {
      sendClientData(inputData);
    }

    // // Получаем значение из <input>
    // const inputName = input.value.trim(); // Убираем лишние пробелы
    // console.log("Input value:", inputValue);

    // // Проверяем, что поле не пустое
    // if (!inputValue) {
    //   console.log("Input is empty");
    //   return;
    // }
  });
}
// inputs.forEach((input) => {
//   input.addEventListener("blur", function () {
//     if (input.value.trim() === "") {
//       console.log(`Поле ${input.name} не заполнено СУКА`);
//     }
//   });
// });

// form.forEach((item) => {
//   item.addEventListener("submit", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     formData = new FormData(item);
//   });
// });
// console.log(formData);
// const form = document.getElementById('myForm');
// const inputs = form.querySelectorAll('input');

// // Валидация на уровне формы
// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const formData = new FormData(form);
//   let isValid = true;

//   for (let [name, value] of formData.entries()) {
//     if (value.trim() === '') {
//       console.log(`Поле ${name} не заполнено`);
//       isValid = false;
//     }
//   }

//   if (isValid) {
//     console.log('Форма валидна, отправляем данные');
//   } else {
//     console.log('Форма содержит ошибки');
//   }
// });

//   data-form-type="modal"
// data-form-type="type1"
// data-form-type="type2"
// data-form-type="type3"

// Объект для хранения данных формы
const formData = {
  name: "",
  email: "",
  phone: "",
  crmType: "",
  message: "",
};

// Select
const select = document.querySelector(".callback-form__form--select");
const dropdown = document.querySelector(".callback-form__dropdown");
const dropdownItems = document.querySelectorAll(".callback-form__form--text");
const optionText = document.querySelector(".callback-form__form--title");

let dropdownActive = false;

// Обработчик клика на select
select.addEventListener("click", (e) => {
  if (e.target === select || e.target === optionText) {
    dropdownActive = !dropdownActive;

    // Переключаем классы
    optionText.classList.toggle("rotate", dropdownActive);
    dropdown.classList.toggle("active", dropdownActive);
    select.classList.toggle("active", dropdownActive);
  }
});

// Обработчик клика на элементы выпадающего списка
dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (dropdownActive) {
      optionText.textContent = item.textContent;
      formData.crmType = item.textContent;

      // Закрываем выпадающий список
      dropdown.classList.remove("active");
      optionText.classList.remove("rotate");
      select.classList.remove("active");

      dropdownActive = false;
    }
  });
});

// Закрытие выпадающего списка при клике вне его области
document.addEventListener("click", (e) => {
  if (!select.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
    optionText.classList.remove("rotate");
    select.classList.remove("active");

    dropdownActive = false;
  }
});

// Разделите код на модули (Webpack позволяет это сделать):
// formHandler.js: Обработка полей и отправка данных.
// validation.js: Правила валидации.
// api.js: Логика отправки данных через fetch.

// Обработка форм:
// Используйте атрибуты data-* для определения типа формы (например, data-form-type="type1").
