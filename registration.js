// JavaScript for registration page

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const submitButton = document.getElementById("submitButton");

    // Add event listener 
    if (submitButton) {
        submitButton.addEventListener("click", function () {
            if (validateForm()) {
                // Submit the form
                form.submit();
            }
        });
    }

    /**
     * Validate the form.
     * Checks required fields and displays error messages 
     * @returns {boolean} - Returns true if valid
     */
    function validateForm() {
        let isValid = true; // form validity from start
        let firstErrorField = null; // Keep track of first error field

        // Clear previous errors
        document.querySelectorAll(".error").forEach((error) => (error.textContent = ""));

        // Validate Username
        const userName = document.getElementById("userName").value.trim();
        if (userName === "") {
            setError("userName", "Username is required.");
            isValid = false;
            firstErrorField = firstErrorField || document.getElementById("userName");
        }

        // Validate Password
        const password = document.getElementById("password").value.trim();
        if (password === "") {
            setError("password", "Password is required.");
            isValid = false;
            firstErrorField = firstErrorField || document.getElementById("password");
        }

        // Validate Password Verification
        const passwordVerify = document.getElementById("passwordVerify").value.trim();
        if (passwordVerify === "") {
            setError("passwordVerify", "Please verify your password.");
            isValid = false;
            firstErrorField = firstErrorField || document.getElementById("passwordVerify");
        } else if (password !== passwordVerify) {
            setError("passwordVerify", "Passwords do not match.");
            isValid = false;
            firstErrorField = firstErrorField || document.getElementById("passwordVerify");
        }

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
            setError("email", "Invalid email format.");
            isValid = false;
            firstErrorField = firstErrorField || document.getElementById("email");
        }

        // Validate Phone Number
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        if (phoneNumber !== "" && !phonePattern.test(phoneNumber)) {
            setError("phoneNumber", "Phone number must be in the format 123-456-7890.");
            isValid = false;
            firstErrorField = firstErrorField || document.getElementById("phoneNumber");
        }

        // If form is invalid, show errors in order
        if (!isValid && firstErrorField) {
            firstErrorField.focus();
        }

        return isValid;
    }

    /**
     * Set an error message for a specific field.
     * @param {string} fieldId - The ID of the field with an error.
     * @param {string} message - The error message 
     */
    function setError(fieldId, message) {
        const errorElement = document.getElementById(`${fieldId}Error`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
});
