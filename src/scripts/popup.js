(function () { 
  popup();

  function popup() { 
    const popupButton = document.querySelector('.assortment__popup-button');
    
    popupButton.addEventListener('click', e => {
      e.preventDefault();
  
      if (popupButton.classList.contains('active')) {
        popupButton.classList.remove('active');
      } else {
        popupButton.classList.add('active');
      }
      
    });
  };
  
})()