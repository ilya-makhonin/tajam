const preload = {
    preloader: document.querySelector('.preloader'),
    done: 'done',

    active() {
        document.body.onload = function () {
            setTimeout(() => {
                if (!this.preloader.classList.contains(this.done)) {
                    this.preloader.classList.add(this.done);
                }
            }, 1000);
        }.bind(this);
    }
};