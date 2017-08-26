import { $WIN, ACTIVE } from '../_constants';

export default (function() {

  const $items = $('[data-show-onscroll]');

  $items.each(function() {

  	const $item = $(this);
    const threshold = $item.data('show-onscroll');

  	const show = () => {
  	  if ($item.offset().top + $item.outerHeight()/100 * threshold <= $WIN.scrollTop() + $WIN.outerHeight()) {
  	    $WIN.off('scroll', show);
  	    $item.addClass(ACTIVE);
  	  }
  	};
    if ($item.offset().top + $item.outerHeight()/100 * threshold <= $WIN.scrollTop() + $WIN.outerHeight()) {
      show();
    };

    $WIN.on('scroll', show);

  });

})();
