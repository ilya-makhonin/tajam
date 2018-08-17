const review = {
    slides: document.querySelectorAll('.review_slider_content .review_slider_comment'),
    tabs: document.querySelectorAll('.review_slider_tabs .review_slider_tab'),
    leftSlide: document.querySelector('#reviewSliderLeft'),
    rightSlide: document.querySelector('#reviewSliderRight'),
    activeSlide: 'review_comment_active',
    activeTab: 'review_tab_active',
    startSlide: 'start_comment',

    play() {
        let switchSlideLeft = function () {
            let count = searchActiveTab(this) - 1;
            if (count < 0) {count = 4;}
            this.tabs[count].click();
        }.bind(this);

        let switchSlideRight = function () {
            let count = searchActiveTab(this) + 1;
            if (count > 4) {count = 0;}
            this.tabs[count].click();
        }.bind(this);

        function searchActiveTab (self) {
            for (let i = 0; i < self.tabs.length; i++) {
                if (self.tabs[i].classList.contains(self.activeTab)) {
                    return parseInt(self.tabs[i].dataset.order);
                }
            }
        }

        this.slider();
        this.leftSlide.addEventListener('click', switchSlideLeft);
        this.rightSlide.addEventListener('click', switchSlideRight);
    },

    slider() {
        let self = this;
        let tabs = this.tabs;
        let slides = this.slides;

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', function () {
                if (this.classList.contains(self.activeTab)) return true;

                if (+this.dataset.order > + document.querySelector('.review_tab_active').dataset.order) {
                    self.scroll(slides[i], 'leftSlideHide', 'rightSlideShow', slides, tabs);
                } else {
                    self.scroll(slides[i], 'rightSlideHide', 'leftSlideShow', slides, tabs);
                }

                this.classList.add(self.activeTab);
            })
        }
    },

    scroll(slideNumber, hide, show, slides, tabs) {
        let activeSlide = document.querySelector('.review_comment_active');
        activeSlide.style.animation = `${hide} .5s linear forwards`;
        this.removeClass(tabs, slides);
        slideNumber.style.animation = `${show} .5s .5s linear forwards`;
        slideNumber.classList.add(this.activeSlide);
    },

    removeClass(tabs, slides) {
        for (let i = 0; i < tabs.length; i++) {
            slides[i].classList.remove(this.activeSlide);
            slides[i].classList.remove(this.startSlide);
            tabs[i].classList.remove(this.activeTab);
        }
    }
};