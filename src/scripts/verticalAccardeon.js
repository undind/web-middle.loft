(function () { 
  const teamList = document.querySelector('.team__list');

  verticalAccordeon(teamList);
  
  function verticalAccordeon(item) { 
    item.addEventListener('click', e => {
      e.preventDefault();
      let teamCards = document.querySelectorAll('.team__item');
      let targetIsPicture = e.target.classList.contains('team__picture');
      let targetIsName = e.target.classList.contains('team__author');
      let teamCardParent = e.target.closest('.team__item');
      let teamCardDesc = teamCardParent.lastElementChild;
      let teamCardDescHeight = teamCardDesc.scrollHeight;
  
      if (targetIsPicture || targetIsName) {
  
        if (teamCardParent.classList.contains('team__item--active')) {
          teamCardParent.classList.remove('team__item--active');
          teamCardDesc.style.height = 0 + 'px';
        } else {
          for (let i = 0; i < teamCards.length; i++) {
            const teamCard = teamCards[i];
            teamCard.classList.remove('team__item--active');
            teamCard.lastElementChild.style.height = 0 + 'px';
          }
          teamCardParent.classList.add('team__item--active');
          teamCardDesc.style.height = teamCardDescHeight + 'px';
        }
      }
    });
  };
})()