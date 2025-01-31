// Form Validation Example
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();

            if (name === '' || email === '' || phone === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Further validation can be added here (e.g., email format, phone number pattern)

            // If validation passes, you can submit the form data via AJAX or another method
            alert('Registration successful!');
            registrationForm.reset(); // Reset the form
        });
    }
});

