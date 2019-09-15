(function () { 
  const reviewsControls = document.querySelectorAll('.reviews__item');
  const reviews = document.querySelectorAll('.reviews__content');
  let currentReview = 0;
  let showInterval = setInterval(nextReview, 4000);
  
  function nextReview() { 
    goToReviews(currentReview + 1);
  };
  
  for (let i = 0; i < reviewsControls.length; i++) {
    const reviewsControl = reviewsControls[i];
    reviewsControl.setAttribute('data-index', [i]);
    reviewsControl.addEventListener('click', function() {
      clearInterval(showInterval);
      showInterval = setInterval(nextReview, 4000);
      this.classList.add('active');
      goToReviews(reviewsControl.getAttribute('data-index'));
    });
  };
  
  function goToReviews(n) { 
    reviews[currentReview].classList.remove('active');
    reviews[currentReview].style.display = 'none';
    reviewsControls[currentReview].classList.remove('active');
  
    currentReview = (n + reviews.length) % reviews.length;
    reviews[currentReview].style.display = 'flex';
    reviewsControls[currentReview].classList.add('active');
  
    setTimeout(() => {
      reviews[currentReview].classList.add('active');
    }, 100);
  };
})()