import { $DOCUMENT, $BODY, NOTOUCH, detectTouch } from './_constants';

export default (function() {

  $DOCUMENT.ready(() => {

    !detectTouch() && $BODY.addClass(NOTOUCH);

  });

})();
