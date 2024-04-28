document.addEventListener('DOMContentLoaded', () => {
    const countdown = new Date('Jun 24 2024');

    const daysVal = document.querySelector('.timer__value-days');
    const hoursVal = document.querySelector('.timer__value-hours');
    const minutesVal = document.querySelector('.timer__value-minutes');
    const secondsVal = document.querySelector('.timer__value-seconds');

    const timeCount = () => {
        let now = new Date();
        let leftTime = countdown - now;

        let days = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        days = days < 10 ? "0" + days : days
        let hours = Math.floor(leftTime / 1000 / 60 / 60) % 24;
        hours = hours < 10 ? "0" + hours : hours
        let minutes = Math.floor(leftTime / 1000 / 60) % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes
        let seconds = Math.floor(leftTime / 1000) % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;
    };

    timeCount();
    setInterval(timeCount, 1000);
})

// valid form
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('.main__form-input');
const mainInput = document.querySelector('.main__form');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function onInput() {
    if (isEmailValid(input.value)) {
        mainInput.style.borderColor = 'green';
        input.style.color = 'black';
    } else {
        mainInput.style.borderColor = 'red';
        input.style.color = 'red';
    }
}

input.addEventListener('input', onInput);

// open Modal
document.getElementById('openModal').addEventListener('click', function (event) {
    event.preventDefault()
    if (isEmailValid(input.value)) {
        document.getElementById('modalWindow').classList.add('open')
    }
})

//close Modal
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('modalWindow').classList.remove('open')
})

// AJAX
// let servResponse = document.getElementById('response');
// document.forms.emailForm.onsubmit = function() {
//     let userInput = document.forms.emailForm.emailForm__inp.value;
//     userInput = encodeURIComponent(userInput);

//     let xhr = new XMLHttpRequest();

//     xhr.open('POST', 'form.php');

//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//     xhr.send('emailForm__inp=' + userInput);
// }

// footer btn
function showAccordion() {
    if (document.getElementById('events').style.display == 'block') {
        document.getElementById('events').style.display = 'none';
        document.getElementById('buttonAccordion').classList.remove('main__footer-btn--active')
    }
    else {
        document.getElementById('events').style.display = 'block';
        document.getElementById('buttonAccordion').classList.add('main__footer-btn--active');
    }
}

// скролл при клике
const $buttonAccordion = document.getElementById('buttonAccordion');
const $events = document.getElementById('events');

$buttonAccordion.addEventListener('click', () => {
    $events.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
    });
});

// accordion
new Accordion('.accordion-container')