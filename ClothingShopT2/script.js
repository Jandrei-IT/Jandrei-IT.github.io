document.addEventListener("DOMContentLoaded", () => {
  // CONTACT FORM SUBMISSION
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;
      alert("Name: " + name + "\nMessage: " + message);
    });
  }

  // Asynch/Await
  const addToCartButtons = document.querySelectorAll(".btn");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", async function (event) {
      event.preventDefault();

      const productCard = this.closest(".product");
      const productName = productCard.querySelector("p").innerText;
      const productPrice = productCard.querySelector(".price").innerText;
      const productImage = productCard.querySelector("img").getAttribute("src");

      try {
        await addToCart({ name: productName, price: productPrice, image: productImage });
        alert(`${productName} added to cart!`);
      } catch (error) {
        console.error("Error adding to cart:", error);
        alert("Failed to add item to cart.");
      }
    });
  });

  const cartTableBody = document.querySelector("tbody");
  if (cartTableBody) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach(item => {
      const row = createCartRow(item);
      cartTableBody.appendChild(row);
    });

    cartTableBody.addEventListener("click", async function(e) {
      if (e.target.classList.contains("remove-btn")) {
        const row = e.target.closest("tr");
        const name = row.querySelector("span").innerText;

        await removeFromCart(name);
        row.remove();
      }
    });
  }
  async function addToCart(item) {
    await new Promise(resolve => setTimeout(resolve, 200)); // simulate delay
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  async function removeFromCart(name) {
    await new Promise(resolve => setTimeout(resolve, 200)); // simulate delay
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.name !== name);
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
});
  
