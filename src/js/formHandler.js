import { sendClientData } from "./api";
import { validateInputWithEmail, validateInputWithoutEmail } from "./validate";

(function findBtn() {
  const btnArray = document.querySelectorAll("button");
  btnArray.forEach((button) => {
    button.addEventListener("click", (e) => {
      const form = button.closest("form");
      if (form) {
        checkBtnForm(form);
      }
    });
  });
})();

function checkBtnForm(form) {
  const inputName = form.querySelector("input[id^='name']");
  const inputEmail = form.querySelector("input[id^='email']");
  const inputPhone = form.querySelector("input[id^='phone']");
  const textareaMessage = form.querySelector("textarea");

  const inputData = {
    email: "",
    phone: "",
    name: "",
    message: "",
  };

  if (inputEmail && inputEmail.value) {
    inputData.email = inputEmail.value;
  }
  if (textareaMessage && textareaMessage.value) {
    inputData.message = textareaMessage.value;
  }
  if (inputPhone && inputPhone.value) {
    inputData.phone = inputPhone.value;
  }
  if (inputName && inputName.value) {
    inputData.phone = inputName.value;
  }
  processRequest(inputData);
}

function processRequest(values) {
  if (values.email && validateInputWithEmail(values)) {
    sendClientData(values);
  } else if (values.phone && values.name && validateInputWithoutEmail(values)) {
    sendClientData(values);
  } else {
    alert("Пожалуйста, заполните все обязательные поля.");
  }
}

const formData = {
  name: "",
  email: "",
  phone: "",
  crmType: "",
  message: "",
};

const select = document.querySelectorAll(
  ".pagecrm__callback-form__form--select"
);
const dropdown = document.querySelectorAll(".pagecrm__callback-form__dropdown");
const dropdownItems = document.querySelectorAll(
  ".pagecrm__callback-form__form--text"
);
const optionText = document.querySelectorAll(
  ".pagecrm__callback-form__form--title"
);

let dropdownActive = false;

(function openDropdown() {
  select.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target) {
        dropdownActive = !dropdownActive;

        optionText.forEach((elem) =>
          elem.classList.toggle("rotate", dropdownActive)
        );
        dropdown.forEach((elem) =>
          elem.classList.toggle("active", dropdownActive)
        );
      }
    });
  });
})();

(function dropdownValues() {
  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (dropdownActive) {
        optionText.forEach((elem) => (elem.textContent = item.textContent));
        formData.crmType = item.textContent;

        dropdown.forEach((elem) => elem.classList.remove("active"));
        optionText.forEach((elem) => elem.classList.remove("rotate"));
        select.forEach((elem) => elem.classList.remove("active"));

        dropdownActive = false;
      }
    });
  });
})();

function isTargetOutsideCollections(target, ...collections) {
  return !collections
    .flat()
    .some((collection) =>
      Array.from(collection).some((el) => el.contains(target))
    );
}

(function closeDropdownByEmptyClick() {
  document.addEventListener("click", (e) => {
    if (isTargetOutsideCollections(e.target, select, dropdown)) {
      select.forEach((el) => el.classList.remove("active"));
      dropdown.forEach((el) => el.classList.remove("active"));
      optionText.forEach((elem) => elem.classList.remove("rotate"));
      dropdownActive = false;
    }
  });
})();
