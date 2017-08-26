import { ACTIVE, INIT } from '../_constants';

;(function() {
  let slider = $('.js-proggres-slider');
  let index = 0;
  let delay = 4000;
  let interval;

  let autoPlay = (parent, elements) => {
  	$(elements[0]).addClass(ACTIVE);
    interval = setInterval(function() {

	  (index === elements.length-1 )
	  	? index = 0
	  	: index++;
	  elements.removeClass(ACTIVE);
	  $(elements[index]).addClass(ACTIVE);

	  parent.addClass(ACTIVE);
	  setTimeout(function() {
        parent.removeClass(ACTIVE);
	  }, 500 );
    }, delay );
    setTimeout(function() {
      parent.addClass(INIT);
    }, 1300 );
  	
  };

  slider.each(function(i, el) {
    let thatSlider = $(this);
    let slide = thatSlider.find('.js-proggres-slide');
    autoPlay(thatSlider, $(slide));
  });

})();
