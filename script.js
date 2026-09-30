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


// =========================
// Authentication
// =========================

const API_BASE = "/backend/api";

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;

        const message = document.getElementById("registerMessage");

        try {
            const response = await fetch(`${API_BASE}/register.php`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const result = await response.json();

            message.textContent = result.message;

            if (result.success) {
                registerForm.reset();
            }

        } catch (error) {
            message.textContent = "Unable to connect to server.";
        }
    });
}


if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const message = document.getElementById("loginMessage");

        try {
            const response = await fetch(`${API_BASE}/login.php`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const result = await response.json();

            message.textContent = result.message;

            if (result.success) {
                loginForm.reset();
            }

        } catch (error) {
            message.textContent = "Unable to connect to server.";
        }
    });
}