function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    updateDigit("hours-tens", hours[0]);
    updateDigit("hours-ones", hours[1]);
    updateDigit("minutes-tens", minutes[0]);
    updateDigit("minutes-ones", minutes[1]);
    updateDigit("seconds-tens", seconds[0]);
    updateDigit("seconds-ones", seconds[1]);
}

function updateDigit(id, value) {
    const digit = document.getElementById(id);
    digit.querySelector('.flip-bottom').style.transform = `rotateX(0deg)`;
    setTimeout(() => {
        digit.querySelector('.flip-bottom').style.transform = `rotateX(180deg)`;
        digit.querySelector('.flip-top').textContent = value;
    }, 250); // Half of the transition duration
}

setInterval(updateClock, 1000);
updateClock();
