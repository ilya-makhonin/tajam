const headerSlider = {
    slides: document.querySelectorAll('.header_slider_container .header_slider_content'),
    tabs: document.querySelectorAll('.header_slider_tabs .header_slider_tab'),
    slideActive: 'header_slide_active',
    tabActive: 'header_tab_active',
    count: 0,

    play() {
        this.autoPlay();
        this.clickTab();
    },

    autoPlay() {
        let tabs = this.tabs;
        let slides = this.slides;

        setInterval(() => {
            this.count++;

            if (this.count > 3) {
                this.count = 0;
            }

            this.removeClass(tabs, slides);

            slides[this.count].classList.add(this.slideActive);
            tabs[this.count].classList.add(this.tabActive);
        }, 5000);
    },

    clickTab() {
        let sliderTabs = this.tabs;
        let slideContent = this.slides;
        let self = this;

        for (let i = 0; i < sliderTabs.length; i++) {
            sliderTabs[i].addEventListener('click', function () {
                if (this.classList.contains(self.tabActive)) return true;

                self.removeClass(sliderTabs, slideContent);

                this.classList.add(self.tabActive);
                slideContent[i].classList.add(self.slideActive);
                self.count = i;
            });
        }
    },

    removeClass(tabs, slides) {
        for (let i = 0; i < tabs.length; i++) {
            slides[i].classList.remove(this.slideActive);
            tabs[i].classList.remove(this.tabActive);
        }
    }
};