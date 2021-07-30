(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();
const navEl = document.querySelector("[data-menu]");
const menuBtnRef = document.querySelector("[data-menu-button]");
navEl.addEventListener("click", (e) => {
  if (e.target instanceof HTMLAnchorElement) {
    navEl.classList.remove("is-open");
    menuBtnRef.classList.remove("is-open");
  }
  if (e.target instanceof HTMLButtonElement) {
    navEl.classList.remove("is-open");
    menuBtnRef.classList.remove("is-open");
  }
});

const enterBtn = document.querySelector(".enter--btn"); //! кнопка входа
const tabletEnterBtn = document.querySelector(".tablet-enter--btn");
const authorBlockEl = document.querySelector(".header-author--btn");
const mobileAuthorBlockEl = document.querySelector(".mobile-author--block");
const mobileMenuEl = document.querySelector(".mobile--menu"); //! menu
const headerNavEl = document.querySelector(".header--nav"); //! menu

enterBtn.addEventListener("click", clickOnEnterBtn);
tabletEnterBtn.addEventListener("click", clickOnEnterBtn);
function clickOnEnterBtn() {
  mobileMenuEl.classList.remove("inactive--menu");
  headerNavEl.classList.remove("inactive--menu");
  authorBlockEl.classList.add("inactive--menu");
  mobileAuthorBlockEl.classList.add("inactive--menu");
}
