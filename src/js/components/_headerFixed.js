import { $WIN, FIXED } from '../_constants';

;(function() {
	
  let $header = $('.js-header');
  const switcherHeader = () => {
    let offset = $WIN.scrollTop();
    ( offset >= 1 ) 
      ? $header.addClass(FIXED)
      : $header.removeClass(FIXED);
  };
  $WIN.on('scroll', switcherHeader);

})();
