'use strict';

var video = {
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

    render: function render() {
        this.play();
        this.controls();
    },
    play: function play() {
        var _this = this;

        this.playButton.addEventListener('click', function () {
            _this.playPanel.classList.add(_this.hiddenPlayPanel);
            _this.videoContent.classList.add(_this.showVideo);
        });
    },
    controls: function controls() {
        var _this2 = this;

        this.volume.value = 0;
        this.volume.min = 0;
        this.volume.max = this.videoRoller.duration;

        var positionDuration = null;

        var playOrPause = function playOrPause() {
            if (_this2.videoRoller.paused) {
                _this2.videoRoller.play();
                positionDuration = setInterval(initPosition, 1000 / 65);
                _this2.playBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
            } else {
                _this2.videoRoller.pause();
                _this2.playBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
            }
        };

        var initPosition = function initPosition() {
            _this2.volume.value = _this2.videoRoller.currentTime;
        };

        var mute = function mute() {
            if (_this2.videoRoller.muted) {
                _this2.videoRoller.muted = false;
                _this2.sound.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
                return true;
            }

            _this2.videoRoller.muted = true;
            _this2.sound.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
        };

        this.videoRoller.addEventListener('click', playOrPause);
        this.playBtn.addEventListener('click', playOrPause);
        this.volume.addEventListener('mousedown', function () {
            clearInterval(positionDuration);
            if (_this2.videoRoller.paused) {} else {
                playOrPause();
            }
        });
        this.volume.addEventListener('mouseup', function () {
            _this2.videoRoller.currentTime = _this2.volume.value;
            playOrPause();
        });
        this.sound.addEventListener('click', mute);
        this.videoRoller.addEventListener('ended', function () {
            _this2.playPanel.classList.remove(_this2.hiddenPlayPanel);
            _this2.videoContent.classList.remove(_this2.showVideo);
        });
    }
};