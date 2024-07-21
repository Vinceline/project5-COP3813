function checkForm() {
   resetValidation();

   var fullName = document.getElementById("fullName").value.trim();
   var email = document.getElementById("email").value.trim();
   var password = document.getElementById("password").value.trim();
   var confirmPassword = document.getElementById("passwordConfirm").value.trim();

   var isValid = true;

   // Validate Full Name
   if (fullName.length === 0) {
      displayError("Missing full name.");
      isValid = false;
      addErrorClass("fullName");
   }

   // Validate Email
   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!emailRegex.test(email)) {
      displayError("Invalid or missing email address.");
      isValid = false;
      addErrorClass("email");
   }

   // Validate Password length
   if (password.length < 10 || password.length > 20) {
      displayError("Password must be between 10 and 20 characters.");
      isValid = false;
      addErrorClass("password");
   }

   // Validate lowercase character in Password
   var lowercaseRegex = /[a-z]/;
   if (!lowercaseRegex.test(password)) {
      displayError("Password must contain at least one lowercase character.");
      isValid = false;
      addErrorClass("password");
   }

   // Validate uppercase character in Password
   var uppercaseRegex = /[A-Z]/;
   if (!uppercaseRegex.test(password)) {
      displayError("Password must contain at least one uppercase character.");
      isValid = false;
      addErrorClass("password");
   }

   // Validate digit in Password
   var digitRegex = /\d/;
   if (!digitRegex.test(password)) {
      displayError("Password must contain at least one digit.");
      isValid = false;
      addErrorClass("password");
   }

   // Validate Password and Confirmation Password match
   if (password !== confirmPassword) {
      displayError("Password and confirmation password don't match.");
      isValid = false;
      addErrorClass("passwordConfirm");
   }

   // Handle form submission based on validation result
   if (isValid) {
      hideErrors(); // Hide errors if form is valid
   } else {
      showErrors(); // Show errors if form is invalid
   }
}

function displayError(message) {
   var errorList = document.getElementById("formErrors");
   var listItem = document.createElement("li");
   listItem.textContent = message;
   errorList.appendChild(listItem);
}

function resetValidation() {
   var errorList = document.getElementById("formErrors");
   errorList.innerHTML = ""; // Clear all previous error messages
   var inputs = document.querySelectorAll(".error");
   inputs.forEach(function (input) {
      input.classList.remove("error");
   });
}

function addErrorClass(inputId) {
   document.getElementById(inputId).classList.add("error");
}

function showErrors() {
   var formErrors = document.getElementById("formErrors");
   formErrors.classList.remove("hide"); // Ensure formErrors div is visible
}

function hideErrors() {
   var formErrors = document.getElementById("formErrors");
   formErrors.classList.add("hide"); // Hide formErrors div
}

document.getElementById("submit").addEventListener("click", function (event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});
