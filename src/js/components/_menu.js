import { TimelineMax } from 'gsap';
import { OPEN, $HEADER } from '../_constants';

;(function() {
	
  let btn = $('.js-btn-menu');
  let menu = $HEADER.find('.js-header-menu');

  let duration = 0.4;

  let menuStaggerGroup = menu.find('[data-stagger="group"]');
  let menuStaggerAnimation = new TimelineMax({ paused: true });
  menuStaggerGroup.each(function(i, el) {
    let that = $(this);
    let staggerItem = that.find('[data-stagger]');
    menuStaggerAnimation
      .staggerTo( staggerItem, duration, {
        y: 0,
        opacity: 1,
        ease: Power4.easeOut
      }, 0.1 );
  });

  let menuAnimation = new TimelineMax({ paused: true })
    .to( menu, duration, {
      y: 0,
      ease: Power4.easeOut
    }, 0 )
    .eventCallback('onComplete', () => {
      menuStaggerAnimation.play();
    });

  btn.on('click', function() {
    let that = $(this);
    
    if ( !that.hasClass( OPEN ) ) {
      that.addClass(OPEN);
      menuAnimation.play();
    } 
    else {
      that.removeClass(OPEN);
      menuAnimation.reverse();
    }
    return false;
  });
	

})();
