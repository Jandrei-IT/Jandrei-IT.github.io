const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) { event.preventDefault(); 
    const name = document.getElementById("name").value; const message = document.getElementById("message").value;
    alert("Name: " + name + "\nMessage: " + message); });
     const navbar = document.getElementById("navbar");

  function login() {
    // Add Profile link if not already present
    if (!document.getElementById("profileLink")) {
      const profileItem = document.createElement("li");
      profileItem.innerHTML = '<a href="userprofile.html" id="profileLink">Profile</a>';
      navbar.appendChild(profileItem);
    }
    alert("You are logged in. Profile link is now visible.");
  }

  function logout() {
    // Remove Profile link if it exists
    const profileLink = document.getElementById("profileLink");
    if (profileLink) {
      profileLink.parentElement.remove();
    }
    alert("You are logged out. Profile link is hidden.");
  }