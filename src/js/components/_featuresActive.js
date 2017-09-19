import { $WIN, ACTIVE, SCROLL_TO } from '../_constants';

;(function() {

  let $blockItem = $('.js-features-item');
  let link = $('.js-navigation-link');

  function onScroll(event) {
    var $scrollPos = $WIN.scrollTop();
    $blockItem.each(function() {
      let $that = $(this);
      let id = $that.attr('id');
      if ($that.offset().top <= $scrollPos && $that.offset().top + $that.height() > $scrollPos) {
      	link.removeClass(ACTIVE);
        $('[href="#'+id+'"]').addClass(ACTIVE);
      }
    });
  };

  link.on('click', function() {
  	let thisAttr = $(this).attr('href');
  	let position = $(thisAttr).offset().top;
  	SCROLL_TO(position);
  });

  $WIN.on('scroll touchend', onScroll);
  
})();
