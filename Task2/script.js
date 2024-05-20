document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const targetDateInput = document.getElementById('targetDate');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    let countdownInterval;

    startButton.addEventListener('click', () => {
        const targetDate = new Date(targetDateInput.value);
        if (isNaN(targetDate)) {
            alert('Please select a valid date and time.');
            return;
        }
        
        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
    });

    function updateCountdown(targetDate) {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            alert('Countdown has finished!');
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysSpan.textContent = String(days).padStart(2, '0');
        hoursSpan.textContent = String(hours).padStart(2, '0');
        minutesSpan.textContent = String(minutes).padStart(2, '0');
        secondsSpan.textContent = String(seconds).padStart(2, '0');
    }
});
