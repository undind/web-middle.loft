(function () { 
  slider();

  function slider() { 
    const sliderLeftButton = document.querySelector('.assortment__control--left');
    const sliderRightButton = document.querySelector('.assortment__control--right');
    const slider = document.querySelector('#slider');
    const slides = document.querySelectorAll('.assortment__item');
    const slide = document.querySelector('.assortment__item');
  
    let minRight = 0;
    let currentRight = 0;
  
    slider.style.right = currentRight;
  
    function leftMove() {
      let step = slide.offsetWidth;
      let maxRight = (slides.length - 1) * step;
      if (currentRight > minRight) {
        currentRight -= step;
        slider.style.right = currentRight + 'px';
      } else {
        currentRight = maxRight;
        slider.style.right = maxRight + 'px';
      }
    }
  
    function rightMove() {
      let step = slide.offsetWidth;
      let maxRight = (slides.length - 1) * step;
      if (currentRight < maxRight) {
        currentRight += step;
        slider.style.right = currentRight + 'px';
      } else {
        currentRight = minRight;
        slider.style.right = minRight + 'px';
      }
    }
  
    sliderLeftButton.addEventListener('click', e => {
      e.preventDefault();
      leftMove();
    });
  
    sliderRightButton.addEventListener('click', e => {
      e.preventDefault();
      rightMove();
    });
  
  };
})()