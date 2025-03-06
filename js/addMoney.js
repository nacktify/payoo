/**
 * 1. add event lister into the add money (form submit) btn.
 * make sure to preventDefault so that page dosent reloads
 * 2. get the money user wants to add. also, get the pin nmbr user provided.
 * 3. verify the pin nmbr. for, wrong pin ==> Failed to Add Money.
 * or if the pin is valid add the amount to the main balance.
 * 4. get the current balance.
 * 5. add new money with current balance.
 * 6. display/update the amount in DOM/UI.
 * **/

document.getElementById('btn-add-money')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const pinNumber = document.getElementById('input-pin-numb').value;
        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyInNmbr = parseFloat(addMoney);

        if (pinNumber === '2580') {
            const balance = document.getElementById('main-balance').innerText;
            const balanceInNmbr = parseFloat(balance);

            const newMainBalance = addMoneyInNmbr + balanceInNmbr;
            document.getElementById('main-balance').innerText = newMainBalance;
        }
        else {
            alert('Failed to Add Money! Try again later.')
        }
    })