import { sendClientData } from "./api.js";
import { validateInput } from "./validate.js";

const bodyElement = document.body;

const modalContainer = document.querySelector(".main-modal-wrapper");
const modalForm = document.querySelector(".modal-form");

const modalInputPhone = document.querySelector(".modal-form__name");
const modalInputEmail = document.querySelector(".modal-form__email");

const modalTriggerElem = document.querySelectorAll(
  ".pagecrm__callback-btn--modal"
);
const modalCloseBtn = document.querySelector(".close-main-modal-btn svg");

modalTriggerElem.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    modalContainer.classList.add("main-modal-wrapper--show");
    bodyElement.classList.add("no-scroll");
    console.log("modal showed");
  });
});

modalContainer.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    modalContainer.remove.classList("main-modal-wrapper--show");
  }
});

modalCloseBtn.addEventListener("click", () => {
  console.log("modal closed");
  modalContainer.classList.remove("main-modal-wrapper--show");
  bodyElement.classList.remove("no-scroll");
});

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputData = {
    email: modalInputEmail.value,
    phone: modalInputPhone.value,
    name: "",
    message: "",
  };

  if (inputData.email && inputData.phone && validateInput(inputData)) {
    console.log(inputData);
    sendClientData(inputData);
    modalInputPhone.value = "";
    modalInputEmail.value = "";
  } else {
    alert("ошибка");
  }
  modalContainer.classList.remove("main-modal-wrapper--show");
  bodyElement.classList.remove("no-scroll");
});

//https://257d26ade8f53d9d.mokky.dev/clientRequest

// modalInputEmail.style.borderColor = "#c01717";
// modalInputEmail.style.borderColor = "#c01717";
