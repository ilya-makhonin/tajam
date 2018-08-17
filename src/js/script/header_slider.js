'use strict';

var headerSlider = {
    slides: document.querySelectorAll('.header_slider_container .header_slider_content'),
    tabs: document.querySelectorAll('.header_slider_tabs .header_slider_tab'),
    slideActive: 'header_slide_active',
    tabActive: 'header_tab_active',
    count: 0,

    play: function play() {
        this.autoPlay();
        this.clickTab();
    },
    autoPlay: function autoPlay() {
        var _this = this;

        var tabs = this.tabs;
        var slides = this.slides;

        setInterval(function () {
            _this.count++;

            if (_this.count > 3) {
                _this.count = 0;
            }

            _this.removeClass(tabs, slides);

            slides[_this.count].classList.add(_this.slideActive);
            tabs[_this.count].classList.add(_this.tabActive);
        }, 5000);
    },
    clickTab: function clickTab() {
        var sliderTabs = this.tabs;
        var slideContent = this.slides;
        var self = this;

        var _loop = function _loop(i) {
            sliderTabs[i].addEventListener('click', function () {
                if (this.classList.contains(self.tabActive)) return true;

                self.removeClass(sliderTabs, slideContent);

                this.classList.add(self.tabActive);
                slideContent[i].classList.add(self.slideActive);
                self.count = i;
            });
        };

        for (var i = 0; i < sliderTabs.length; i++) {
            _loop(i);
        }
    },
    removeClass: function removeClass(tabs, slides) {
        for (var i = 0; i < tabs.length; i++) {
            slides[i].classList.remove(this.slideActive);
            tabs[i].classList.remove(this.tabActive);
        }
    }
};