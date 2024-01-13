document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawAmount = getInputFieldValueById('user-withdraw');
    const previousWithdrawTotal = getElementValueById('Withdraw-amount');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementById('Withdraw-amount', newWithdrawTotal);


    const previousTotal = getElementValueById('total-balance');
    const newTotal = previousTotal - newWithdrawTotal;

    setTextElementById('total-balance', newTotal)
})