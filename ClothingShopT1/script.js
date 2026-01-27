document.addEventListener("DOMContentLoaded", () => {

  // CONTACT FORM
  const contactForm = document.getElementById("contactForm");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";
    if (!name || !message) {
      alert("Please fill out both fields.");
      return;
    }
    alert(`Name: ${name}\nMessage: ${message}`);
  });

  //CART
  const addToCartButtons = document.querySelectorAll(".btn");
const cartItems = document.getElementById("cartItems"); // tbody ID


async function addToCart(item) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}


async function removeFromCart(name) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.name !== name);
  localStorage.setItem("cart", JSON.stringify(cart));
}


function createCartRow(item) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${item.image}" alt="${item.name}" class="cart-img">
      <span>${item.name}</span>
    </td>
    <td>${item.price}</td>
    <td><input type="number" value="1" min="1"></td>
    <td>${item.price}</td>
    <td><button class="remove-btn">✖</button></td>
  `;
  return row;
}


addToCartButtons.forEach((button) => {
  button.addEventListener("click", async (e) => {
    e.preventDefault();

    const productCard = button.closest(".product");
    if (!productCard) return;

    const productName = productCard.querySelector("p")?.innerText || "";
    const productPrice = productCard.querySelector(".price")?.innerText || "";
    const productImage = productCard.querySelector("img")?.getAttribute("src") || "";

    if (!productName || !productPrice) return;

    await addToCart({
      name: productName,
      price: productPrice,
      image: productImage
    });

    alert(`${productName} added to cart!`);
  });
});


if (cartItems) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach(item => {
    const row = createCartRow(item);
    cartItems.appendChild(row);
  });

  
  cartItems.addEventListener("click", async (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const row = e.target.closest("tr");
      const name = row.querySelector("span").innerText;

      await removeFromCart(name);
      row.remove();
    }
  });
}

const receiptItems = document.getElementById("receiptItems");
const receiptTotal = document.getElementById("receiptTotal");

function parsePrice(price) {
  return Number(price.replace("₱", ""));
}

if (receiptItems) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  receiptItems.innerHTML = "";

  cart.forEach(item => {
    const qty = item.quantity || 1;
    const price = parsePrice(item.price);
    const rowTotal = price * qty;
    total += rowTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${qty}</td>
      <td>₱${rowTotal}</td>
    `;

    receiptItems.appendChild(row);
  });

  receiptTotal.innerText = `₱${total}`;
}

  //LOGIN
  const loginForm = document.getElementById("loginForm");
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email")?.value.trim() || "";
    const password = document.getElementById("password")?.value.trim() || "";

    if (!email || !email.includes("@")) {
      alert("Enter a valid email.");
      return;
    }

    if (!password || password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "userprofile.html";
  });

  //SIGNUP
  const signupForm = document.getElementById("signupForm");
  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.getElementById("fname")?.value.trim() || "";
    const lname = document.getElementById("lname")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const password = document.getElementById("password")?.value.trim() || "";
    const confirmPassword = document.getElementById("confirm")?.value.trim() || "";
    const mobile = document.getElementById("mobile")?.value.trim() || "";
    const address = document.getElementById("address")?.value.trim() || "";

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
      alert("Password and Confirm Password must match.");
      return;
    }

    if (!/^\d+$/.test(mobile)) {
      alert("Mobile number must contain digits only.");
      return;
    }

    window.location.href = "login.html";
  });

  //NAVIGATION
  const loginLink = document.getElementById("loginLink");
  const profileLink = document.getElementById("profileLink");
  const logoutLink = document.getElementById("logoutLink");
  const logoutBtn = document.getElementById("logoutBtn");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    loginLink?.style.setProperty("display", "none");
    profileLink?.style.setProperty("display", "inline-block");
    logoutLink?.style.setProperty("display", "inline-block");
  } else {
    loginLink?.style.setProperty("display", "inline-block");
    profileLink?.style.setProperty("display", "none");
    logoutLink?.style.setProperty("display", "none");
  }

  logoutBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
  });

});
