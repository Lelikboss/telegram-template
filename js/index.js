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

var slider = Peppermint(document.getElementById("peppermint"), {
  dots: true,
  slideshow: false,
  speed: 500,
  slideshowInterval: 5000,
  stopSlideshowAfterInteraction: true,
  onSetup: function (n) {
    console.log("Peppermint setup done. Slides found: " + n);
  },
});
