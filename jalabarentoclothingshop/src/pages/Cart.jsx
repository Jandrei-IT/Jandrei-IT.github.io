import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import './Cart.css';

const SHIPPING_FEE = 70;

const Cart = () => {
  useEffect(() => {
   
    async function removeFromCart(name) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter((item) => item.name !== name);
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    
    function createCartRow(item) {
      const row = document.createElement("tr");
      const qty = item.qty ? item.qty : 1;
      row.innerHTML = `
        <td>
          <img src="${item.image}" alt="${item.name}" class="cart-img">
          <span>${item.name}</span>
        </td>
        <td>${item.price}</td>
        <td><input type="number" value="${qty}" min="1"></td>
        <td>${item.price}</td>
        <td><button class="remove-btn">✖</button></td>
      `;
      return row;
    }

    const cartItems = document.getElementById("cartItems");
    if (cartItems) {
      cartItems.innerHTML = "";
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
          await updateCartSummary();
        }
      });
    }

    
    async function updateCartSummary() {
      let subtotal = 0;
      document.querySelectorAll("#cartItems tr").forEach(row => {
        const priceText = row.querySelector("td:nth-child(2)")?.textContent.replace("₱", "").trim();
        const qtyInput = row.querySelector("input[type='number']");
        const totalCell = row.querySelector("td:nth-child(4)");
        if (priceText && qtyInput && totalCell) {
          const price = parseFloat(priceText);
          const qty = parseInt(qtyInput.value);
          const lineTotal = price * qty;
          totalCell.textContent = `₱${lineTotal}`;
          subtotal += lineTotal;
        }
      });
      
      const subtotalEl = document.getElementById("subtotal");
      const shippingEl = document.getElementById("shipping");
      const grandTotalEl = document.getElementById("grand-total");
      if (subtotalEl) subtotalEl.textContent = `₱${subtotal}`;
      if (shippingEl) shippingEl.textContent = `₱${SHIPPING_FEE}`;
      if (grandTotalEl) grandTotalEl.textContent = `₱${subtotal + SHIPPING_FEE}`;
    }

    
    document.querySelectorAll("#cartItems input[type='number']").forEach(input => {
      input.addEventListener("input", async (e) => {
        const row = e.target.closest("tr");
        const name = row.querySelector("span").innerText;
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.map(item => {
          if (item.name === name) {
            return { ...item, qty: parseInt(e.target.value) };
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        await updateCartSummary();
      });
    });

   
    updateCartSummary();
  }, []);

  return (
    <div className="cart-page-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar isLoggedIn={true} />
        <main className="main-content">
      <h2 className="cart-heading">Shopping Cart</h2>
      <section className="cart" aria-label="Shopping cart items">
        <table>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody id="cartItems">
            {}
          </tbody>
        </table>

        <aside className="cart-summary" aria-label="Cart summary">
          <h2>Cart Summary</h2>
          <p>
            Subtotal: <span id="subtotal">₱00</span>
          </p>
          <p>
            Shipping: <span id="shipping">₱00</span>
          </p>
          <p>
            <strong>
              Grand Total: <span id="grand-total">₱00</span>
            </strong>
          </p>
          <a
            href="/Confirm"
            className="checkout-btn"
            id="checkoutBtn"
            onClick={e => {
              const cart = JSON.parse(localStorage.getItem("cart")) || [];
              if (!cart.length) {
                e.preventDefault();
                alert("Your cart is empty. Please add items before proceeding to checkout.");
              }
            }}
          >
            Proceed to Checkout
          </a>
        </aside>
      </section>
    </main>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
