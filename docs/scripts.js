const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (!name || !email) {
            alert("Please fill out both fields.");
            return;
        }

        alert("Thank you for signing up, " + name + "! We will keep you updated at " + email + ".");
    });
}


const taxButton = document.getElementById("tax-button");
const taxInfo = document.getElementById("tax-info");

if (taxButton && taxInfo) {
    taxButton.addEventListener("click", function() {
        if (taxInfo.style.display === "none") {
            taxInfo.style.display = "block";
            taxButton.textContent = "Hide tax resources";
        } else {
            taxInfo.style.display = "none";
            taxButton.textContent = "Click here for tax resources!";
        }
    });
}


//savings calculator DOM manipulation
document.addEventListener("DOMContentLoaded", () => {
    const goalInput = document.getElementById("goal");
    const monthlyInput = document.getElementById("monthly");
    const result = document.getElementById("calc-result");

    function updateCalculator() {
        const goal = Number(goalInput.value);
        const monthly = Number(monthlyInput.value);

        if (goal > 0 && monthly > 0) {
            const months = Math.ceil(goal / monthly);
            result.textContent = `You will reach your goal in ${months} month(s).`;
        } else {
            result.textContent = "Please enter valid numbers for both fields.";
        }
    }

    goalInput.addEventListener("input", updateCalculator);
    monthlyInput.addEventListener("input", updateCalculator);
});
