//CLASSES
export const OPEN = 'is-open';
export const ACTIVE = 'is-active';
export const INIT = 'is-init';
export const TOUCH = 'is-touch';
export const NOTOUCH = 'no-touch';

//elements
export const $WIN = $(window);
export const $DOCUMENT = $(document);
export const $BODY = $('body');
export const $HEADER = $('.js-header');

//utils
export const detectTouch = () => 'ontouchstart' in window;

export const SCROLL_TO = position => {
  $BODY.animate({
    scrollTop: position
  }, 700);
};
