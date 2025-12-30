import { sendClientData } from "./api.js";
import { validateInput, validateInputWithEmail } from "./validate.js";

const bodyElement = document.body;

const modalContainer = document.querySelector(".main-modal-wrapper");
const modalForm = document.querySelector(".modal-form");

const modalInputPhone = document.querySelector(".modal-form__name");
const modalInputEmail = document.querySelector(".modal-form__email");

const modalTriggerElem = document.querySelectorAll(
  ".pagecrm__callback-btn--modal"
);
const modalCloseBtn = document.querySelector(".close-main-modal-btn svg");

const modalSubmittedContainer = document.querySelector(
  ".main-modal-sub-wrapper"
);

modalTriggerElem.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    modalContainer.classList.add("main-modal-wrapper--show");
  });
});

modalContainer.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    modalContainer.remove.classList("main-modal-wrapper--show");
  }
});

modalCloseBtn.addEventListener("click", () => {
  modalContainer.classList.remove("main-modal-wrapper--show");
});

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  modalContainer.classList.remove("main-modal-wrapper--show");
  bodyElement.classList.remove("no-scroll");
  modalSubmittedContainer.classList.add("main-modal-wrapper--show");
});


