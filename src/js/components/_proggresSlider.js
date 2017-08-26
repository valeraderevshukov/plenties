import { ACTIVE } from '../_constants';

;(function() {
  let slider = $('.js-proggres-slider');
  let index = 0;
  let delay = 2500;
  let interval;
  let autoPlay = (elements) => {
  	$(elements[0]).addClass(ACTIVE);
    interval = setInterval(function() {

      elements.removeClass(ACTIVE);
      $(elements[index]).addClass(ACTIVE);

      (index === elements.length-1 )
      	? index = 0
      	: index++;
			
    }, delay );
  };
	
  slider.each(function(i, el) {
    let that = $(this);
    let slide = that.find('.js-proggres-slide');
    autoPlay($(slide));
  });

})();
