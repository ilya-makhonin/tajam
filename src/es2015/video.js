const video = {
    playButton: document.querySelector('.watch_story_play'),
    playPanel: document.querySelector('.watch_story_pre'),
    videoContent: document.querySelector('.watch_story_content'),
    hiddenPlayPanel: 'hidden_play_panel',
    showVideo: 'show_video_content',

    videoRoller: document.querySelector('#video'),
    playBtn: document.querySelector('#playBtn'),
    volume: document.querySelector('#volume'),
    sound: document.querySelector('#sound'),
    silence: document.querySelector('#soundOff'),

    render() {
        this.play();
        this.controls();
    },

    play() {
        this.playButton.addEventListener('click', () => {
            this.playPanel.classList.add(this.hiddenPlayPanel);
            this.videoContent.classList.add(this.showVideo);
        })
    },

    controls() {
        this.volume.value = 0;
        this.volume.min = 0;
        this.volume.max = this.videoRoller.duration;

        let positionDuration = null;

        let playOrPause =  () => {
            if (this.videoRoller.paused) {
                this.videoRoller.play();
                positionDuration  = setInterval(initPosition, 1000 / 65);
                this.playBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
            } else {
                this.videoRoller.pause();
                this.playBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
            }
        };

        let initPosition = () => {
            this.volume.value = this.videoRoller.currentTime;
        };

        let mute = () => {
            if (this.videoRoller.muted) {
                this.videoRoller.muted = false;
                this.sound.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
                return true;
            }

            this.videoRoller.muted = true;
            this.sound.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
        };

        this.videoRoller.addEventListener('click', playOrPause);
        this.playBtn.addEventListener('click', playOrPause);
        this.volume.addEventListener('mousedown', () => {
            clearInterval(positionDuration);
            if (this.videoRoller.paused) {

            } else {
                playOrPause();
            }
        });
        this.volume.addEventListener('mouseup', () => {
            this.videoRoller.currentTime = this.volume.value;
            playOrPause();
        });
        this.sound.addEventListener('click', mute);
        this.videoRoller.addEventListener('ended', () => {
            this.playPanel.classList.remove(this.hiddenPlayPanel);
            this.videoContent.classList.remove(this.showVideo);
        })
    }
};