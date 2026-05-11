/*document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !subject || !message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all required fields!',
            confirmButtonColor: '#d33'
        });
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'warning',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.',
            confirmButtonColor: '#f39c12'
        });
        return;
    }
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Submitting your data now...',
        showConfirmButton: false,
        timer: 2000 
    }).then(() => {
        event.target.submit();
    });
});*/


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all required fields!',
            confirmButtonColor: '#d33'
        });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'warning',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.',
            confirmButtonColor: '#f39c12'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Submitting your data now...',
        showConfirmButton: false,
        timer: 2000 
    }).then(() => {
        form.submit();
    });
});


function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const btn = document.querySelector('.theme-toggle');
    btn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
}