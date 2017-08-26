import { $WIN } from '../_constants';

export default (function() {

	const $features = $('.js-features');


	$WIN.on('scroll', function(e) {

		const winHeight = $WIN.outerHeight();
		const winOffsetTop = $WIN.scrollTop();
		const winOffsetCenter = winOffsetTop + winHeight/2;

		$features.each(function() {

			const $this = $(this);
			const sidebar = $this.find('.js-features-sidebar');
			const $nav = $this.find('.js-features-nav');
			const $bar = $this.find('.js-features-bar');

			const navOffsetTop = $nav.offset().top;
			const navHeight = $nav.outerHeight();

		});

	});


})();