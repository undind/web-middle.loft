(function () { 
  accardeon();

  function accardeon() { 
    const menuLink = document.querySelectorAll('.menu__link');
    
    for (let i = 0; i < menuLink.length; i++) {
      menuLink[i].addEventListener('click', e => {
        e.preventDefault();
        const menuItem = menuLink[i].parentNode;
        if (menuItem.classList.contains('menu__items--active')) {
          menuItem.classList.remove('menu__items--active');
        } else {
          hide();
          menuItem.classList.add('menu__items--active');
        }
      });
    }

    function hide() { 
      for (let i = 0; i < menuLink.length; i++) {
        const menuItem = menuLink[i].parentNode;
        menuItem.classList.remove('menu__items--active');
      }
    };
  };
})()