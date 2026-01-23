document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById("loginLink");
    const profileLink = document.getElementById("profileLink");
    const logoutLink = document.getElementById("logoutLink");
    const logoutBtn = document.getElementById("logoutBtn");

    // Check login state
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        // User is logged in → show Profile & Logout, hide Login
        loginLink.style.display = "none";
        profileLink.style.display = "inline-block";
        logoutLink.style.display = "inline-block";
    } else {
        // User is logged out → show Login, hide Profile & Logout
        loginLink.style.display = "inline-block";
        profileLink.style.display = "none";
        logoutLink.style.display = "none";
    }

    // Logout functionality
    logoutBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        window.location.href = "index.html"; // redirect to home after logout
    });
});
