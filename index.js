


const signInForm = document.getElementById('signIn');

if (signInForm) {
    signInForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const fname = document.getElementById('firstname').value.trim();
        const sname = document.getElementById('lastname').value.trim();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('Pass').value;
        const confirmPass = document.getElementById('confirm').value;
        const phone = document.getElementById('phoneNumber').value.trim();

        let isValid = true;
        const unamepat = /^[A-Za-z][^\s@#$%^&*!]{1,11}$/
        const namepat = /^[A-Za-z][^\s@#$%^_&*\d!]{1,11}$/

        if (username === "") {
            document.getElementById('nameError').textContent = "Your user Name is required";
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = "";
        }
        if (!unamepat.test(username)) {
            document.getElementById('nameError').textContent = "your name mustn't have special characters & must start with a letter";
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = "";
        }

         if ( fname === "") {
            document.getElementById('firstnameError').textContent = "Your first Name is required";
            isValid = false;
        } else {
            document.getElementById('firstnameError').textContent = "";
        }
        if (!namepat.test(fname)) {
            document.getElementById('firstnameError').textContent = "your name mustn't have any special characters";
            isValid = false;
        } else {
            document.getElementById('firstnameError').textContent = "";
        }

         if ( sname === "") {
            document.getElementById('secondnameError').textContent = "Your Last Name is required";
            isValid = false;
        } else {
            document.getElementById('secondnameError').textContent = "";
        }
        if (!namepat.test(sname)) {
            document.getElementById('secondnameError').textContent = "your name mustn't have any special characters";
            isValid = false;
        } else {
            document.getElementById('secondnameError').textContent = "";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = "please write a valid email";
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = "";
        }

        const passpa = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%^&*!]{8,}$/;
        if (password.length < 8) {
            document.getElementById('passError').textContent = "your Password must be larger than 8 characters";
            isValid = false;
        } else {
            document.getElementById('passError').textContent = "";
        }
        if (!passpa.test(password)) {
            document.getElementById('passError').textContent = "your Password Must has atleast one capital letter & one number";
            isValid = false;
        } else {
            document.getElementById('passError').textContent = "";
        }

        if (password !== confirmPass) {
            document.getElementById('confirmError').textContent = "the password doesn't match";
            isValid = false;
        } else {
            document.getElementById('confirmError').textContent = "";
        }

        const phonepat = /^[0][1][0125]\d{8}$/
        if(!phonepat.test(phone)){
            document.getElementById('phoneError').textContent = "Must start with 01 and contain 11 digits";
            isValid = false;
        }
        else {
            document.getElementById('phoneError').textContent = "";
        }

        if (isValid) {

            const userData = {
                firstName: fname,
                lastName: sname,
                user: username,
                email: email,
                pass: password
            };

            localStorage.setItem('user', JSON.stringify(userData));

            Swal.fire({
                backGroundColor:'#b19e85',
                title: 'Success',
                text: "Your Account has been made successfully",
                icon: 'success',
                iconColor:'#541308',
                confirmButtonText: 'okay',
                confirmButtonColor: "#541308",
            }).then((result) => {
                if (result.isConfirmed) {
                    signInForm.reset();
                    window.location.href = "login.html";
                }
            
        });//then
    }//valid ending
        
    });// event
} //sign form ending


//login code start

const loginForm = document.getElementById('login');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const unameu = document.getElementById('Uname').value.trim();
        const passu = document.getElementById('checkPass').value;
        const savedData = localStorage.getItem('user');
        const tryingu = JSON.parse(savedData);
        if (!tryingu) {
            Swal.fire('Error', 'No account found with these data', 'error');
        } 
        else if (unameu === tryingu.user && passu === tryingu.pass) {
            Swal.fire({
                title: 'Welcome Back!',
                text: `Hello ${tryingu.firstName}`,
                icon: 'success',
                iconColor:'#541308',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                window.location.href = "home.html";
            });
        } 
        else {
            Swal.fire('Oops!', 'Invalid Email or Password', 'error' ,'#541308');
        }
    });
}