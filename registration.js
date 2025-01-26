// JavaScript for registration


function validateForm() {
    let isValid = true; // form validity from start
    let firstErrorField = null; // Keep track of field with error

    // Clear previous error messages
    document.querySelectorAll(".error").forEach((error) => (error.textContent = ""));

    // Validate First Name
    const firstName = document.getElementById("firstName").value.trim();
    if (firstName === "") {
        setError("firstName", "First name is required.");
        isValid = false;
        firstErrorField = firstErrorField || document.getElementById("firstName");
    }

    // Validate Last Name
    const lastName = document.getElementById("lastName").value.trim();
    if (lastName === "") {
        setError("lastName", "Last name is required.");
        isValid = false;
        firstErrorField = firstErrorField || document.getElementById("lastName");
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        setError("email", "Email is required.");
        isValid = false;
        firstErrorField = firstErrorField || document.getElementById("email");
    } else if (!emailPattern.test(email)) {
        setError("email", "Please enter a valid email address.");
        isValid = false;
        firstErrorField = firstErrorField || document.getElementById("email");
    }

    // Validate Phone 
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (phone !== "" && !phonePattern.test(phone)) {
        setError("phone", "Phone number must be in the format 123-456-7890.");
        isValid = false;
        firstErrorField = firstErrorField || document.getElementById("phone");
    }

    // Validate Password
    const password = document.getElementById("password").value.trim();
    if (password === "") {
        setError("password", "Password is required.");
        isValid = false;
        firstErrorField = firstErrorField || document.getElementById("password");
    } else if (password.length < 6) {
        setError("password", "Password must be at least 6 characters long.");
        isValid = false;
        firstErrorField = firstErrorField || document.getElementById("password");
    }

    // If invalid, focus the first error
    if (!isValid && firstErrorField) {
        firstErrorField.focus();
        return false;
    }

    // If valid, redirect to the confirmation page
    document.getElementById("registrationForm").submit();
    return true;
}

/**
 * Set an error message for specific fields
 * @param {string} fieldId - The ID of the field with error
 * @param {string} message - The error message 
 */
function setError(fieldId, message) {
    document.getElementById(`${fieldId}Error`).textContent = message;
}

// event listener for submit button
document.getElementById("submitButton").addEventListener("click", validateForm);
