document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById("loginLink");
    const profileLink = document.getElementById("profileLink");
    const logoutLink = document.getElementById("logoutLink");
    const logoutBtn = document.getElementById("logoutBtn");

    
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        
        loginLink.style.display = "none";
        profileLink.style.display = "inline-block";
        logoutLink.style.display = "inline-block";
    } else {
        
        loginLink.style.display = "inline-block";
        profileLink.style.display = "none";
        logoutLink.style.display = "none";
    }

    
    logoutBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        window.location.href = "index.html";
    });
});


