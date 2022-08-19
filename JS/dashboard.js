
// get the deposit value using by id

document.getElementById('Deposit-Button').addEventListener('click', function () {
    const pressAndGet = document.getElementById('Deposit-Field');
    const deposit = pressAndGet.value;
    const depositString = parseFloat(deposit);



    const depositCount = document.getElementById('Deposite-Count');
    const count = depositCount.innerText;
    const countString = parseFloat(count);

    // clear the input field after enter the value

    pressAndGet.value = '';

    // add 2 number and update deposite count

    depositCount.innerText = depositString + countString;

    // update balance 

    const getBalanceElement = document.getElementById('Balance-Amount');
    const getBalanceValue = getBalanceElement.innerText;
    const getBalanceElementStrint = parseFloat(getBalanceValue);

    const getBalanceElementTotal = getBalanceElementStrint + depositString;
    getBalanceElement.innerText = getBalanceElementTotal;

})

document.getElementById('Withdraw-Button').addEventListener('click', function () {
    const getWithDrawlAmount = document.getElementById('WithDrawl-Amount');
    const getWithDrawlValue = getWithDrawlAmount.value;
    const getWithDrawlAmountStrint = parseFloat(getWithDrawlValue);

    // clear input field

    getWithDrawlAmount.value = '';

    const withDrawAmount = document.getElementById('Withdraw-Amount');
    const getWithDrawInnerText = withDrawAmount.innerText;
    const getWithDrawInnerTextStrint = parseFloat(getWithDrawInnerText);


    withDrawAmount.innerText = getWithDrawInnerTextStrint + getWithDrawlAmountStrint;

    const balanceUpdate = document.getElementById('Balance-Amount');
    const getBalanceValue = balanceUpdate.innerText;
    const getBalanceValueString = parseFloat(getBalanceValue);


    balanceUpdate.innerText = getBalanceValueString - getWithDrawlAmountStrint;


})