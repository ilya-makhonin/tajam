'use strict';

var validate = {
    userName: document.querySelector('#userName'),
    userEmail: document.querySelector('#userEmail'),
    userSubject: document.querySelector('#userSubject'),
    userMessage: document.querySelector('#userComment'),
    emailSubscribe: document.querySelector('#subscribeUser'),
    sendFeedback: document.querySelector('#sendFeedbackForm'),
    sendSubscribe: document.querySelector('#sendSubscribe'),
    regName: /[A-Za-zа-яА-Я]{2,}/,
    regEmail: /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/,

    startValid: function startValid() {
        this.validFeedback();
        this.validSubscribe();
    },
    validFeedback: function validFeedback() {
        var _this = this;

        this.sendFeedback.addEventListener('click', function () {
            var name = _this.regName.test(_this.userName.value),
                email = _this.regEmail.test(_this.userEmail.value),
                subject = _this.userSubject.value === '',
                message = _this.userMessage.value === '';

            if (!name) {
                _this.errorInput(_this.userName);
            }

            if (!email) {
                _this.errorInput(_this.userEmail);
            }

            if (subject) {
                _this.errorInput(_this.userSubject);
            }

            if (message) {
                _this.errorInput(_this.userMessage);
            }

            if (name && email && !subject && !message) {
                _this.sendToServer();
            }
        });
    },
    validSubscribe: function validSubscribe() {
        var _this2 = this;

        this.sendSubscribe.addEventListener('click', function () {
            if (!_this2.regEmail.test(_this2.emailSubscribe.value)) {
                _this2.errorInput(_this2.emailSubscribe);
            } else {
                _this2.sendToServer();
            }
        });
    },
    errorInput: function errorInput(element) {
        event.preventDefault();
        element.classList.add('errorInputValue');
        element.value = 'Error data. Invalid format!';

        setTimeout(function () {
            element.classList.remove('errorInputValue');
            element.value = '';
        }, 1000);
    },
    sendToServer: function sendToServer() {
        console.log('Success!');
    }
};