import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import "./Receipt.css";
import { Link } from "react-router-dom";

const Receipt = () => {
  const [date, setDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Loading...");

  useEffect(() => {
    async function fetchDate() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const today = new Date();
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          resolve(today.toLocaleDateString('en-US', options));
        }, 500);
      });
    }
    async function displayDate() {
      const d = await fetchDate();
      setDate(d);
    }
    displayDate();

    async function displayPaymentInfo() {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const method = localStorage.getItem("selectedPaymentMethod") || "Cash on Delivery";
      setPaymentMethod(method);
    }
    displayPaymentInfo();

    const SHIPPING_FEE = 70;
    const receiptItems = document.getElementById("receiptItems");
    const receiptTotal = document.getElementById("receiptTotal");
    const receiptDate = document.getElementById("receiptDate");

    if (receiptItems) {
      if (receiptDate) receiptDate.textContent = new Date().toLocaleDateString();
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      
      const grouped = {};
      cart.forEach(item => {
        const key = item.name;
        const qty = item.qty ? item.qty : 1;
        if (!grouped[key]) {
          grouped[key] = { ...item, qty };
        } else {
          grouped[key].qty += qty;
        }
      });
      
      receiptItems.innerHTML = "";
      let subtotal = 0;
      Object.values(grouped).forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>
            <img src="${item.image.replace(/^\//, '')}" class="cart-img">
            ${item.name}
          </td>
          <td>${item.qty}</td>
          <td>${item.price}</td>
        `;
        receiptItems.appendChild(row);
        const price = parseFloat(item.price.replace("₱", "").trim());
        subtotal += price * item.qty;
      });
      const total = subtotal + SHIPPING_FEE;
      if (receiptTotal) receiptTotal.textContent = `₱${total}`;
    }
  }, []);

  return (
    <main>
      <div className="receipt-container">
        <Header />
        <Sidebar />
        <div className="receipt-header">
          <h1>Transaction Confirmed</h1>
          <p>Thank you for your purchase!</p>
        </div>

        <div className="receipt-details">
          <p><strong>Order Number:</strong> #123456</p>
          <p><strong>Date:</strong> <span id="receiptDate">{date}</span></p>
          <p><strong>Payment Method:</strong> <span id="receiptPaymentMethod">{paymentMethod}</span></p>
          <p><strong>Address:</strong> 123 Placeholder Street, City</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody id="receiptItems"></tbody>
        </table>

        <p className="total">
          Total: <span id="receiptTotal">₱0</span>
        </p>

        <div className="receipt-footer">
          <p>This receipt serves as proof of your transaction.</p>
          <Link
            to="/"
            className="btn-back"
            id="backToHomeBtn"
            onClick={() => {
              localStorage.removeItem("cart");
              localStorage.removeItem("selectedPaymentMethod");
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Receipt;