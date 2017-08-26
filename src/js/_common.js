import { $DOCUMENT, $BODY, NOTOUCH, detectTouch, SCROLL_TO } from './_constants';

export default (function() {

  $DOCUMENT.ready(() => {

    !detectTouch() && $BODY.addClass(NOTOUCH);

  });

  const SCROLL_LINK = $('.js-scroll-to');
  SCROLL_LINK.on('click touchend', function() {
    let thisAttr = $(this).attr('href');
    let position = $(thisAttr).offset().top;
    SCROLL_TO(position);
  });

})();
