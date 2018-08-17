'use strict';

var review = {
    slides: document.querySelectorAll('.review_slider_content .review_slider_comment'),
    tabs: document.querySelectorAll('.review_slider_tabs .review_slider_tab'),
    leftSlide: document.querySelector('#reviewSliderLeft'),
    rightSlide: document.querySelector('#reviewSliderRight'),
    activeSlide: 'review_comment_active',
    activeTab: 'review_tab_active',
    startSlide: 'start_comment',

    play: function play() {
        var switchSlideLeft = function () {
            var count = searchActiveTab(this) - 1;
            if (count < 0) {
                count = 4;
            }
            this.tabs[count].click();
        }.bind(this);

        var switchSlideRight = function () {
            var count = searchActiveTab(this) + 1;
            if (count > 4) {
                count = 0;
            }
            this.tabs[count].click();
        }.bind(this);

        function searchActiveTab(self) {
            for (var i = 0; i < self.tabs.length; i++) {
                if (self.tabs[i].classList.contains(self.activeTab)) {
                    return parseInt(self.tabs[i].dataset.order);
                }
            }
        }

        this.slider();
        this.leftSlide.addEventListener('click', switchSlideLeft);
        this.rightSlide.addEventListener('click', switchSlideRight);
    },
    slider: function slider() {
        var self = this;
        var tabs = this.tabs;
        var slides = this.slides;

        var _loop = function _loop(i) {
            tabs[i].addEventListener('click', function () {
                if (this.classList.contains(self.activeTab)) return true;

                if (+this.dataset.order > +document.querySelector('.review_tab_active').dataset.order) {
                    self.scroll(slides[i], 'leftSlideHide', 'rightSlideShow', slides, tabs);
                } else {
                    self.scroll(slides[i], 'rightSlideHide', 'leftSlideShow', slides, tabs);
                }

                this.classList.add(self.activeTab);
            });
        };

        for (var i = 0; i < tabs.length; i++) {
            _loop(i);
        }
    },
    scroll: function scroll(slideNumber, hide, show, slides, tabs) {
        var activeSlide = document.querySelector('.review_comment_active');
        activeSlide.style.animation = hide + ' .5s linear forwards';
        this.removeClass(tabs, slides);
        slideNumber.style.animation = show + ' .5s .5s linear forwards';
        slideNumber.classList.add(this.activeSlide);
    },
    removeClass: function removeClass(tabs, slides) {
        for (var i = 0; i < tabs.length; i++) {
            slides[i].classList.remove(this.activeSlide);
            slides[i].classList.remove(this.startSlide);
            tabs[i].classList.remove(this.activeTab);
        }
    }
};