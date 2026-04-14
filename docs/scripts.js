document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const taxButton = document.getElementById("tax-button");
    const taxInfo = document.getElementById("tax-info");
    const goalInput = document.getElementById("goal");
    const monthlyInput = document.getElementById("monthly");
    const result = document.getElementById("calc-result");
    const formMessage = document.getElementById("form-message");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();

            if (!name || !email) {
                if (formMessage) {
                    formMessage.textContent = "Please fill out both fields.";
                    formMessage.className = "status-message error-message";
                }
                return;
            }

            if (formMessage) {
                formMessage.textContent = "Thank you for signing up, " + name + "! We will keep you updated at " + email + ".";
                formMessage.className = "status-message success-message";
            }
        });
    }

    if (taxButton && taxInfo) {
        taxButton.addEventListener("click", () => {
            const isHidden = taxInfo.style.display === "none" || taxInfo.style.display === "";

            taxInfo.style.display = isHidden ? "block" : "none";
            taxButton.textContent = isHidden ? "Hide tax resources" : "Click here for tax resources!";
            taxButton.setAttribute("aria-expanded", String(isHidden));
        });
    }

    if (goalInput && monthlyInput && result) {
        const updateCalculator = () => {
            const goal = Number(goalInput.value);
            const monthly = Number(monthlyInput.value);

            if (goal > 0 && monthly > 0) {
                const months = Math.ceil(goal / monthly);
                result.textContent = `You will reach your goal in ${months} month(s).`;
                return;
            }

            result.textContent = "Please enter valid numbers for both fields.";
        };

        goalInput.addEventListener("input", updateCalculator);
        monthlyInput.addEventListener("input", updateCalculator);
    }
});
