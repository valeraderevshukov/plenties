import { $WIN } from '../_constants';
;(function() {
  let $features = $('.js-features');
  $features.each(function() {
		
  });
  // js-navigation-link
  // js-features-item

  $WIN.ready(function() {
	    $WIN.on('scroll', onScroll);
	    
	    //smoothscroll
	    $('.js-navigation-link').on('click', function(e) {
	        e.preventDefault();
	        $WIN.off('scroll');
	        
	        $('.js-navigation-link').each(function() {
	            $(this).removeClass('is-active');
	        });
	        $(this).addClass('is-active');
	      
	        var target = this.hash,
	            menu = target;
	        $target = $(target);
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top+2
	        }, 500, 'swing', function() {
	            window.location.hash = target;
	            $WIN.on('scroll', onScroll);
	        });
	    });
  });

  function onScroll(event) {
	    var scrollPos = $(document).scrollTop();
	    $('.js-navigation-link').each(function() {
	        var currLink = $(this);
	        var refElement = $(currLink.attr('href'));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.js-navigation-link').removeClass('is-active');
	            currLink.addClass('is-active');
	        }
	        else{
	            currLink.removeClass('is-active');
	        }
	    });
  }
})();
