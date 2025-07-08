// Находим форму
const form = document.querySelector("form");

// Объект для хранения данных формы
const formData = {
  name: "",
  email: "",
  phone: "",
  crmType: "",
  message: "",
};

// Обработчик отправки формы
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Собираем данные из формы
  formData.name = form.querySelector('[name="name"]')?.value || "";
  formData.email = form.querySelector('[name="email"]')?.value || "";
  formData.phone = form.querySelector('[name="phone"]')?.value || "";
  formData.message = form.querySelector('[name="message"]')?.value || "";

  console.log("Form data submitted:", formData);

  // Очищаем форму
  form.reset();
});

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
