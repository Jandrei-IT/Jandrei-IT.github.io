document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form?.addEventListener("submit", (event) => {
    event.preventDefault(); 

    // Destructure input values with optional chaining
    const { value: fnameValue = "" } = document.getElementById("fname") ?? {};
    const { value: lnameValue = "" } = document.getElementById("lname") ?? {};
    const { value: emailValue = "" } = document.getElementById("email") ?? {};
    const { value: passwordValue = "" } = document.getElementById("password") ?? {};
    const { value: confirmValue = "" } = document.getElementById("confirm") ?? {};
    const { value: mobileValue = "" } = document.getElementById("mobile") ?? {};
    const { value: addressValue = "" } = document.getElementById("address") ?? {};

    
    const fname = fnameValue.trim();
    const lname = lnameValue.trim();
    const email = emailValue.trim();
    const password = passwordValue.trim();
    const confirmPassword = confirmValue.trim();
    const mobile = mobileValue.trim();
    const address = addressValue.trim();

    
    if (!fname || !lname || !email || !password || !confirmPassword || !mobile || !address) {
      alert("All fields are required.");
      return;
    }

    
    if (!email.includes("@")) {
      alert("Enter a valid email address.");
      return;
    }

    
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    
    if (password !== confirmPassword) {
      alert("Password and Confirm Password must be the same.");
      return;
    }

    
    if (!/^\d+$/.test(mobile)) {
      alert("Mobile number must contain digits only.");
      return;
    }

    window.location.href = "login.html";
  });
});
