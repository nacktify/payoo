//step 1: set event handler.
document.getElementById('btn-login').addEventListener('click', function (event) {

    //step 2: stop reloading(stop default behavior of form).
    event.preventDefault();
    console.log('is ok?')

    //step 3: get the phone number.
    const mobileNumber = document.getElementById('phone-numb').value;
    console.log(mobileNumber)
})