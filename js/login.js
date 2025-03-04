//step 1: set event handler.
document.getElementById('btn-login').addEventListener('click', function (event) {

    //step 2: stop reloading(stop default behavior of form).
    event.preventDefault();

    //step 3: get the phone number and pin number.
    const mobileNumber = document.getElementById('phone-numb').value;
    const pinNumber = document.getElementById('pin-numb').value;
    console.log(mobileNumber, pinNumber)

    //step 4: validate phone and pin
    if (mobileNumber === '2580' && pinNumber === '2580') {
        //step 5: allow user to use the website
        console.log('You are logged in!')
    } else {
        alert('Wrong credentials! Try again.')
    }
})