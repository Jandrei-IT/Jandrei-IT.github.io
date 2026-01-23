document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Destructure input values with optional chaining
    const { value: emailValue = "" } = document.getElementById("email") ?? {};
    const { value: passwordValue = "" } = document.getElementById("password") ?? {};

    const email = emailValue.trim();
    const password = passwordValue.trim();

    if (!email || !email.includes("@")) {
        alert("Enter a valid email.");
        return;
    }

    if (!password) {
        alert("Password is required.");
        return;
    }
 if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }
        
    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "userprofile.html";
});
