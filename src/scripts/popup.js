(function () { 
  popup();

  function popup() { 
    const popupButtons = document.querySelectorAll('.assortment__popup-button');
    
    for (let i = 0; i < popupButtons.length; i++) {
      popupButtons[i].addEventListener('click', e => {
        e.preventDefault();
    
        if (popupButtons[i].classList.contains('active')) {
          popupButtons[i].classList.remove('active');
        } else {
          popupButtons[i].classList.add('active');
        }
        
      });
    }
    
  };
  
})()