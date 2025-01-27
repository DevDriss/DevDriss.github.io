const passwordInput = document.getElementById('password-input');
const passwordStrength = document.getElementById('password-strength');
const togglePasswordButton = document.getElementById('toggle-password');

// Function to evaluate password strength
function evaluatePasswordStrength(password) {
    let strength = '';

// Strength Criteria
const baseLengthScore = password.length >= 10 ? 1 : 0; // Base point for reaching 10 characters
const additionalLengthScore = Math.floor((password.length - 10) / 10); // Extra points for every 10 additional characters
const totalLengthScore = baseLengthScore + (additionalLengthScore > 0 ? additionalLengthScore : 0); // Combine scores

const lowerCaseScore = /[a-z]/.test(password) ? 1 : 0;
const upperCaseScore = /[A-Z]/.test(password) ? 1 : 0;
const numberScore = /\d/.test(password) ? 1 : 0;
const specialCharScore = /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 1 : 0;

const totalScore = totalLengthScore + lowerCaseScore + upperCaseScore + numberScore + specialCharScore;


    // Evaluate strength based on score
    if (totalScore <= 1 || password.length < 6) {
        strength = 'Very Weak';
        passwordStrength.style.color = 'red';
    } else if (totalScore === 2) {
        strength = 'Weak';
        passwordStrength.style.color = 'red';
    } else if (totalScore === 3) {
        strength = 'Medium';
        passwordStrength.style.color = 'yellow';
    } else if (totalScore >= 4) {
        strength = 'Strong';
        passwordStrength.style.color = 'green';
    }

    return strength;
}

// Update password strength in the DOM
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = evaluatePasswordStrength(password);

    passwordStrength.textContent = `Password Strength: ${strength}`;

});


// Toggle password visibility
togglePasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.textContent = 'Show';
    }
});