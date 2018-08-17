const validate = {
    userName: document.querySelector('#userName'),
    userEmail: document.querySelector('#userEmail'),
    userSubject: document.querySelector('#userSubject'),
    userMessage: document.querySelector('#userComment'),
    emailSubscribe: document.querySelector('#subscribeUser'),
    sendFeedback: document.querySelector('#sendFeedbackForm'),
    sendSubscribe: document.querySelector('#sendSubscribe'),
    regName: (/[A-Za-zа-яА-Я]{2,}/),
    regEmail: (/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/),

    startValid() {
        this.validFeedback();
        this.validSubscribe();
    },

    validFeedback() {
        this.sendFeedback.addEventListener('click', () => {
            let name = this.regName.test(this.userName.value),
                email = this.regEmail.test(this.userEmail.value),
                subject = (this.userSubject.value === ''),
                message = (this.userMessage.value === '');

            if (!name) {
                this.errorInput(this.userName);
            }

            if (!email) {
                this.errorInput(this.userEmail);
            }

            if (subject) {
                this.errorInput(this.userSubject);
            }

            if (message) {
                this.errorInput(this.userMessage);
            }

            if (name && email && !subject && !message) {
                this.sendToServer();
            }
        });
    },

    validSubscribe() {
        this.sendSubscribe.addEventListener('click', () => {
            if (!(this.regEmail.test(this.emailSubscribe.value))) {
                this.errorInput(this.emailSubscribe);
            } else {
                this.sendToServer();
            }
        })
    },

    errorInput(element) {
        event.preventDefault();
        element.classList.add('errorInputValue');
        element.value = 'Error data. Invalid format!';

        setTimeout(() => {
            element.classList.remove('errorInputValue');
            element.value = '';
        }, 1000)
    },

    sendToServer() {
        console.log('Success!');
    }
};