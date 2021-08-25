document.getElementById('submit-btn').addEventListener
('click', function(){
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    // Password
    const passwordFild = document.getElementById
    ('user-password');
    const userPassword = passwordFild.value;
    if (userEmail == 'pola@gmail.com' && userPassword == 'polapain'){
        window.location.href = 'account.html'
    }
})