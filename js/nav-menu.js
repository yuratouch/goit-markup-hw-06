(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openMenuBtn: document.querySelector('[data-menu-open]'),
      // Додати атрибут data-modal-close на кнопку закриття
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      // Додати атрибут data-modal на бекдроп модалки
      menu: document.querySelector('[data-menu]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.menu.classList.toggle('is-open');
    }
    
  })();