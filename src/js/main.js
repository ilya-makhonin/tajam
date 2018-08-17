/**
 * Dependencies
 * @jquery v3.3.1 - not connected
 * @bootstrap v3.3.7 - not connected
 * @lodash v4.17.5 - not connected
 * @axios v0.18.0 - not connected
 * @popper - not connected
 */

//@ ../../bower_components/jquery/dist/jquery.js
//@ ../../_packagesDevelop/popper.js/popper.min.js
//@ ../../bower_components/bootstrap/dist/js/bootstrap.js


/**
 * Custom scripts
 */

//= script/header_slider.js
//= script/preloader.js
//= script/video.js
//= script/review_slider.js
//= script/validate_form.js

window.addEventListener('load', function () {
    headerSlider.play();
    video.render();
    review.play();
    validate.startValid();
});

preload.active();