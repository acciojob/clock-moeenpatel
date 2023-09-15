 function updateClock() {
            const timerElement = document.getElementById("timer");
            const now = new Date();

            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short'
            };

            const formattedDate = now.toLocaleDateString(undefined, options);
            timerElement.textContent = formattedDate;
        }

        
        setInterval(updateClock, 1000);

        updateClock();