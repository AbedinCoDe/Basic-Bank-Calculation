
// get the input value from email and password input

document.getElementById('Submit-Button').addEventListener('click', function () {
    const emailField = document.getElementById('Email-Info');

    // step 2 get the value from the email input
    const email = emailField.value;

    const passwordField = document.getElementById('password-Info');

    const pass = passwordField.value;

    // verify the email and password using if function

    if (email === 'Kausarulabedin2010@yahoo.com' && pass === 'Kausar12') {
        // window.location.replace("Dashboard.html", '_blank');
        window.open("Dashboard.html", "_blank");
    }
    else {
        alert('Please Provide a Valid Email and Password !!')
    }

})

