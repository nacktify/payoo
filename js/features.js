/**
 * 1. Show the Cash Out form 
 **/

document.getElementById('btn-cash-out-show').addEventListener('click', function () {
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
});

document.getElementById('btn-add-money-show').addEventListener('click', function () {
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('add-money-form').classList.remove('hidden')
});