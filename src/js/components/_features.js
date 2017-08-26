import { $WIN, FIXED } from '../_constants';

export default (function() {

  const $features = $('.js-features');


  $WIN.on('scroll', function(e) {

    const winHeight = $WIN.outerHeight();
    const winOffsetTop = $WIN.scrollTop();
    const winOffsetCenter = winOffsetTop + winHeight/2;
    const winOffsetBottom = winOffsetTop + winHeight;

    $features.each(function() {

      const $this = $(this);
      const $sidebar = $this.find('.js-features-sidebar');
      const $nav = $this.find('.js-features-nav');
      const $bar = $this.find('.js-features-bar');

      const featuresHeight = $this.outerHeight();
      const featuresOffsetTop = $this.offset().top;
      const featuresOffsetBottom = featuresOffsetTop + featuresHeight;

      const sidebarOffsetTop = $sidebar.offset().top;
      const sidebarHeight = $sidebar.outerHeight();

      const navOffsetTop = $nav.offset().top;
      const navHeight = $nav.outerHeight();

      const fixedPoint = sidebarOffsetTop + sidebarHeight/2 <= winOffsetCenter;
      const endPoint = featuresOffsetBottom <= navOffsetTop + navHeight;

      console.log(winOffsetCenter < featuresOffsetBottom);

      if (fixedPoint && winOffsetCenter + sidebarHeight/2 < featuresOffsetBottom) {
        $nav
          .removeAttr('style')
          .addClass(FIXED);
      } else if (!fixedPoint) {
        $nav
          .removeAttr('style')
          .removeClass(FIXED);
      } else if (endPoint) {
        $nav
          .removeClass(FIXED)
          .css({
            'position': 'absolute',
            'top': `${featuresHeight - navHeight}px`
          });
      }

    });

  });


})();
