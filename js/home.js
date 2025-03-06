//step 1: add event listener into btn
document.getElementById('btn-add-money').addEventListener('click', function (e) {
    // prevent page reload after form submit
    e.preventDefault();
    //step 2: validate the pin and add money
    const pinNumber = document.getElementById('input-pin-numb').value;

    const addMoney = document.getElementById('input-add-money').value;

    console.log(pinNumber,'$', addMoney)

    if (pinNumber === '2580') {

    } else {
        alert('Wrong credential, Please try again!')
    }

})