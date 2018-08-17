'use strict';

var preload = {
    preloader: document.querySelector('.preloader'),
    done: 'done',

    active: function active() {
        document.body.onload = function () {
            var _this = this;

            setTimeout(function () {
                if (!_this.preloader.classList.contains(_this.done)) {
                    _this.preloader.classList.add(_this.done);
                }
            }, 1000);
        }.bind(this);
    }
};