// Diposit Section ///

// Diposit Button
document.getElementById('diposit-btn').addEventListener
('click', function(){
    //Diposit Input
    const dipositInput = document.getElementById('diposit-input');
    const dipositAmountText = dipositInput.value;
    const dipositAmount = parseFloat(dipositAmountText);

    // Total Diposit Amount
    const totalDipositText = document.getElementById('total-diposit');
    const totalDipositValue = totalDipositText.innerText;
    const totalDiposit = parseFloat(totalDipositValue);
    totalDipositText.innerText = totalDiposit + dipositAmount;

    //total balance with diposit
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalanceValue = totalBalanceText.innerText;
    const totalBalance = parseFloat(totalBalanceValue);
    totalBalanceText.innerText = totalBalance + dipositAmount;
    // clean input fild
    dipositInput.value = '';
});

// Withdraw section ///

//Withdraw Button
document.getElementById('withdraw-btn').addEventListener
('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    
    //Total withdraw Amount
    const totalWithdrawText = document.getElementById('total-withdraw');
    const totalWithdrawValue = totalWithdrawText.innerText;
    const totalWithdraw = parseFloat(totalWithdrawValue);
    totalWithdrawText.innerText = totalWithdraw + withdrawAmount;
    
    //total balance with withdraw
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalanceValue = totalBalanceText.innerText;
    const totalBalance = parseFloat(totalBalanceValue);
    totalBalanceText.innerText = totalBalance - withdrawAmount;
    
    //clean withdraw Input Fild
    withdrawInput.value ='';
});