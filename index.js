const orderForm = document.getElementById('orderForm');

if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        let isValid = true;
        if (name === "") {
            document.getElementById('nameError').textContent = "Name is required!";
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = "";
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = "Please enter a valid email!";
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = "";
        }
        if (password.length < 8) {
            document.getElementById('passError').textContent = "Password must be at least 8 characters!";
            isValid = false;
        } else {
            document.getElementById('passError').textContent = "";
        }
        if (isValid) {
            alert("Form Submitted Successfully!");
            orderForm.reset();
        }
    });
}