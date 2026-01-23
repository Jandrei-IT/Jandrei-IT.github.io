const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) { event.preventDefault(); 
    const name = document.getElementById("name").value; const message = document.getElementById("message").value;
    alert("Name: " + name + "\nMessage: " + message); });

 document.addEventListener("DOMContentLoaded", () => {
  const loginFormElement = document.getElementById("loginForm");

  if (loginFormElement) {
    loginFormElement.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Both email and password are required!");
        return;
      }

      // Validate email format
      if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
      }

      // If all validations pass → redirect
      window.location.href = "userprofile.html";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const signupFormElement = document.getElementById("signupForm");

  if (signupFormElement) {
    signupFormElement.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission

      const fname = document.getElementById("fname").value.trim();
      const lname = document.getElementById("lname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirm = document.getElementById("confirm").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const address = document.getElementById("address").value.trim();

      // Check required fields
      if (!fname || !lname || !email || !password || !confirm || !mobile || !address) {
        alert("All fields are required!");
        return;
      }

      // Validate email format
      if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
      }

      // Validate password match
      if (password !== confirm) {
        alert("Passwords do not match!");
        return;
      }

      // Validate mobile number (basic check: digits only, length >= 10)
      const mobilePattern = /^[0-9]{10,}$/;
      if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid mobile number (at least 10 digits).");
        return;
      }

      // If all validations pass → redirect
      window.location.href = "login.html";
    });
  }
});





