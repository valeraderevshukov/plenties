import { $WIN, FIXED } from '../_constants';

export default (function() {

  const $features = $('.js-navigation-wrap');

  const featuresPosition = () => {
    const winHeight = $WIN.outerHeight();
    const winOffsetTop = $WIN.scrollTop();
    const winOffsetCenter = winOffsetTop + winHeight/2;
    const winOffsetBottom = winOffsetTop + winHeight;

    $features.each(function() {

      const $this = $(this);
      const $sidebar = $this.find('.js-navigation-sidebar');
      const $nav = $this.find('.js-navigation-switcher');
      const $bar = $this.find('.js-navigation-bar');

      const featuresHeight = $this.outerHeight();
      const featuresOffsetTop = $this.offset().top;
      const featuresOffsetBottom = featuresOffsetTop + featuresHeight;

      const sidebarOffsetTop = $sidebar.offset().top;
      const sidebarHeight = $sidebar.outerHeight();

      const navOffsetTop = $nav.offset().top;
      const navHeight = $nav.outerHeight();

      const fixedPoint = sidebarOffsetTop + sidebarHeight/2 <= winOffsetCenter;
      const endPoint = featuresOffsetBottom <= navOffsetTop + navHeight;

      let progress = null;

      if (fixedPoint && winOffsetCenter + sidebarHeight/2 < featuresOffsetBottom) {
        $nav
          .removeAttr('style')
          .removeClass('is-absolute')
          .addClass(FIXED);
        progress = ( winOffsetCenter - featuresOffsetTop - navHeight/2 ) / ( (featuresHeight - navHeight) / 100 );
      } else if (!fixedPoint) {
        $nav
          .removeAttr('style')
          .removeClass('is-absolute')
          .removeClass(FIXED);
        progress = 0;
      } else if (endPoint) {
        $nav
          .removeClass(FIXED)
          .addClass('is-absolute')
          .css({
            'position': 'absolute',
            'top': `${featuresHeight - navHeight}px`
          });
      }

      progress = progress >= 100 ? 100 : progress;
      $bar.css('transform', `translateY(${progress}%)`);

    });
  };

  featuresPosition();
  $WIN.on('scroll', featuresPosition);


})();
