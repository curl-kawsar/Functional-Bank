document.getElementById('btn-deposite').addEventListener('click', function () {


    const newDepositeAmount = getInputFieldValueById('user-deposite');


    const previouseDepoTotal = getElementValueById('deposite-amount');

    // console.log(newDepositeAmount);
    // console.log(previouseDepoTotal);



    const newDepositTotal = newDepositeAmount + previouseDepoTotal;

    // Total Balance

    setTextElementById('deposite-amount', newDepositTotal);


    // get previous balance


    const previousBalanceTotal = getElementValueById('total-balance');

    const newBalance = previousBalanceTotal + newDepositTotal;


    setTextElementById('total-balance',newBalance);
});