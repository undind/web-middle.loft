const template = document.querySelector('#overlayTemplate').innerHTML;
const overlay = createOverlay(template);

function createOverlay(template) { 
  let fragment = document.createElement('div');
  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector('.overlay');
  const contentElement = fragment.querySelector('.overlay__content');
  const buttonElement = fragment.querySelector('.overlay__btn');

  fragment = null;

  overlayElement.addEventListener('click', e => {
    if (e.target === overlayElement) {
      buttonElement.click();
    }
  });

  buttonElement.addEventListener('click', e => {
    e.preventDefault();
    document.body.removeChild(overlayElement);
    document.body.classList.remove('body-fix');
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
      document.body.classList.add('body-fix');
    },
    close() {
      buttonElement.click();
    },
    setContent(content) {
      contentElement.innerHTML = content;
    }
  }
};