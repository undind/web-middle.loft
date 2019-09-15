const sections = $('.section');
const display = $('.maincontent');
let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const countPosition = sectionEq => {
  return `${sectionEq * -100}%`;
};

const switchActiveClass = (elem, elemEq) => {
  elem.eq(elemEq).addClass('active').siblings().removeClass('active');
};

const unBlickScroll = () => {
  display.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function () {
    inscroll = false;
  });
};

const perfomTransition = sectionEq => {

  if (inscroll) return;

  inscroll = true;
  const position = countPosition(sectionEq);
  const switchFixedMenuActiveClass = () => {
    switchActiveClass($('.fixed-menu__item'), sectionEq);
  };

  switchFixedMenuActiveClass();

  switchActiveClass(sections, sectionEq);

  display.css({
    transform: `translateY(${position})`
  });

  unBlickScroll();

};

const scrollViewport = direction => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === 'next' && nextSection.length) {
    perfomTransition(nextSection.index());
  }

  if (direction === 'prev' && prevSection.length) {
    perfomTransition(prevSection.index());
  }
};

$(document).on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;
  const direction = deltaY < 0 ? 'prev' : 'next';

  scrollViewport(direction);
});

$(document).on('keydown', e => {
  const tagName = e.target.tagName.toLowerCase();
  const userTypingInInput = tagName === 'input' || tagName === 'textarea';

  if (userTypingInInput) return; 
    switch (e.keyCode) {
      case 38:
        scrollViewport('prev');
        break;
      case 40:
        scrollViewport('next');
        break;
    }

});

$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll-to'));

  perfomTransition(target);
});

if (isMobile) {
  window.addEventListener('touchmove', e => {
    e.preventDefault()
  }, { passive: false });

  $('body').swipe({
    swipe: function (event, direction) {
      let scrollDirection;

      if (direction === 'up') scrollDirection = 'next';
      if (direction === 'down') scrollDirection = 'prev';

      scrollViewport(scrollDirection);
    }
  });
}

