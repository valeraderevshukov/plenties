import { ACTIVE } from '../_constants';

;(function() {
  let slider = $('.js-proggres-slider');
  let index = 0;
  let delay = 4000;
  let interval;

  let autoPlay = (parent, elements) => {
  	$(elements[0]).addClass(ACTIVE);
    interval = setInterval(function() {

      elements.removeClass(ACTIVE);
      $(elements[index]).addClass(ACTIVE);

      (index === elements.length-1 )
      	? index = 0
      	: index++;
	  parent.addClass(ACTIVE);
	  setTimeout(function() {
        parent.removeClass(ACTIVE);
	  }, 500 );
    }, delay );
  	
  };

  slider.each(function(i, el) {
    let thatSlider = $(this);
    let slide = thatSlider.find('.js-proggres-slide');
    autoPlay(thatSlider, $(slide));
  });

})();
