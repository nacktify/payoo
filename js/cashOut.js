document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const pinNumber = document.getElementById('input-pin-number').value;
        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutInNmbr = parseFloat(cashOut);

        if (pinNumber === '2580') {
            const mainBalance = document.getElementById('main-balance').innerText;
            const mainBalanceInNmbr = parseFloat(mainBalance);

            const newMainBalance = mainBalanceInNmbr - cashOutInNmbr;

            document.getElementById('main-balance').innerText = newMainBalance;
        }
        else {
            alert('Failed to Cash Out, Try again!')
        }
    })