import { $WIN, ACTIVE } from '../_constants';

export default (function() {

  const $title = $('.js-contact-title');

  const show = () => {
    if ($title.offset().top + $title.outerHeight() / 1.5 <= $WIN.scrollTop() + $WIN.outerHeight()) {
      $WIN.off('scroll', show);
      $title.addClass(ACTIVE);
    }
  };

  $WIN.on('scroll', show);

})();
