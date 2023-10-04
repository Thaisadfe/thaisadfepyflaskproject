document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle mobile navigation menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Get a reference to the form element
    const contactForm = document.getElementById('contact-form');

    // Add an event listener for the form's submit event
    contactForm.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve the values of the input fields
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Create an object to hold the form data
        const formData = {
            fullName: fullName,
            email: email,
            phone: phone,
            message: message
        };

        // Send the form data to your server using an AJAX request (e.g., fetch or XMLHttpRequest)
        // Replace the URL below with the appropriate endpoint on your server
        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                // The form was successfully submitted, you can handle the response here
                console.log('Form submitted successfully');
                // You can optionally redirect to a success page or display a success message
            } else {
                // Handle errors or failed submissions
                console.error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
