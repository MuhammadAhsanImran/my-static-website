const themeBtn = document.getElementById("themeBtn");

const saveTheme = localStorage.getItem("theme");

if (saveTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeButton() {
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        themeBtn.textContent = "☀️";
        themeBtn.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeBtn.textContent = "🌙";
        themeBtn.setAttribute("aria-label", "Switch to dark mode");
    }
}

updateThemeButton();

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    updateThemeButton();
});

/* EmailJS Contact Form */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm(
            "service_ahsan_portfolio",
            "template_portfolio",
            this
        )
        .then(function () {
            alert("Thank you for your message!");
            contactForm.reset();
        })
        .catch(function (error) {
            console.error("EmailJS Error:", error);
            alert("Sorry, your message could not be sent. Please try again.");
        });
    });
}