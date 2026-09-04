const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️";
        } else {
            themeButton.textContent = "🌙";
        }

    });

}
// CONTACT FORM

const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        successMessage.textContent = "Message sent successfully! ❤️";
        successMessage.style.color = "#c85a17";
        successMessage.style.fontWeight = "bold";

        contactForm.reset();

    });

}
