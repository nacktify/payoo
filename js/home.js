//step 1: add event listener into btn
document.getElementById('btn-add-money').addEventListener('click', function (e) {
    // prevent page reload after form submit
    e.preventDefault();
    //step 2: validate the pin and add money
    const pinNumber = document.getElementById('input-pin-numb').value;
    const addMoney = document.getElementById('input-add-money').value;
    //step 3: get current amount
    const mainBalance = document.getElementById('main-balance').innerText;


    if (pinNumber === '2580') {
        //step 4: make them nmbr and then operate a addition
        const nmbrAddMoney = parseFloat(addMoney);
        const nmbrMainBalance = parseFloat(mainBalance);

        const newMainBalance = nmbrAddMoney + nmbrMainBalance;

        // step 5: update the main balance
        document.getElementById('main-balance').innerText = newMainBalance;
    }
    else {
        alert('Failed to add money, Please try again!')
    }

})