(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.modal.classList.toggle("no-scroll");
    }
  })();

  // (() => {
  //   const refs = {
  //     openMenuBtn: document.querySelector(".mobile-button__open"),
  //     closeMenuBtn: document.querySelector(".mobile-button__close"),
  //     menu: document.querySelector(".mobile_menu"),
  //   };
  
  //   refs.openMenuBtn.addEventListener("click", toggleMenu);
  //   refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
  //   function toggleMenu() {
  //     refs.menu.classList.toggle("is-hidden");
  //     refs.menu.classList.toggle("no-scroll");
  //   }
  // })();

  // (() => {
  //   const refs = {
  //     openModalBtn: document.querySelector(".mobile-button__open"),
  //     closeModalBtn: document.querySelector(".mobile-button__close"),
  //     modal: document.querySelector(".mobile_menu"),
  //   };
  
  //   refs.openModalBtn.addEventListener("click", toggleModal);
  //   refs.closeModalBtn.addEventListener("click", toggleModal);
  
  //   function toggleModal() {
  //     refs.modal.classList.toggle("is-hidden");
  //     refs.modal.classList.toggle("no-scroll");
  //   }
  // })();