(() => {
    const refs = {
      openMenuBtn: document.querySelector(".mobile-button__open"),
      closeMenuBtn: document.querySelector(".mobile-button__close"),
      menu: document.querySelector(".mobile_menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.menu.classList.toggle("no-scroll");
    }
  })();