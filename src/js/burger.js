const burgerBtn = document.querySelector(".pagecrm__burger-btn");
const burgerMenu = document.querySelector(".pagecrm__burger-menu");
const burgerCloseBtn = document.querySelector(
  ".pagecrm__burger-menu-close-btn"
);

burgerBtn.addEventListener("click", (e) => {
  show();
  console.log("click");
});
burgerCloseBtn.addEventListener("click", (e) => {
  hide();
});

function show() {
  burgerMenu.style.visibility = "visible";
  burgerMenu.style.opacity = "1";
  disableScroll();
}
function hide() {
  burgerMenu.style.visibility = "hidden";
  burgerMenu.style.opacity = "0";
  burgerMenu.style.transition = "visibility 0.2s, opacity 0.5s linear";
  enableScroll();
}

function disableScroll() {
  document.body.classList.add("remove-scrolling");
}

function enableScroll() {
  document.body.classList.remove("remove-scrolling");
}
