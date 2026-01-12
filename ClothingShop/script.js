const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) { event.preventDefault(); 
    const name = document.getElementById("name").value; const message = document.getElementById("message").value;
    alert("Name: " + name + "\nMessage: " + message); });