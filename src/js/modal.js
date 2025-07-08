const bodyElement = document.body;
const modal = document.querySelector(".main-modal-wrapper");
const modalInputName = document.querySelector(".modal-form__name");
const modalInputEmail = document.querySelector(".modal-form__email");
const modalPolicyCheckbox = document.querySelector(".modal-form__checkbox");
const modalTriggerElem = document.querySelectorAll(".page__crm-tariffs-btn");
const modalCloseBtn = document.querySelector(".close-main-modal-btn svg");

modalTriggerElem.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    modal.style.display = "flex";
    bodyElement.classList.add("no-scroll");
    console.log("modal showed");
  });
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

modalCloseBtn.addEventListener("click", (event) => {
  console.log("modal closed");
  modal.style.display = "none";
  bodyElement.classList.remove("no-scroll");
});

if (modalPolicyCheckbox.checked) {
  modalInputName.disabled = false;
  modalInputEmail.disabled = false;
} else {
  modalInputName.disabled = true;
  modalInputEmail.disabled = true;
}

modalPolicyCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    modalInputName.disabled = true;
    modalInputEmail.disabled = true;
  }
});

//https://257d26ade8f53d9d.mokky.dev/clientRequest
modalInputEmail.style.borderColor = "#c01717";
modalInputEmail.style.borderColor = "#c01717";
