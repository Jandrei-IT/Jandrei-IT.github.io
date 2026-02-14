import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import "./Confirm.css";

const Checkout = () => {
  const [payment, setPayment] = useState("");
  const [card, setCard] = useState({ cardNumber: "", expiryDate: "", cvv: "", cardName: "" });
  const [ewallet, setEwallet] = useState({ provider: "", accountNumber: "" });
  const [delivery, setDelivery] = useState("");
  const navigate = useNavigate();

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleCardChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleEwalletChange = (e) => {
    setEwallet({ ...ewallet, [e.target.name]: e.target.value });
  };

  const handleDeliveryChange = (e) => {
    setDelivery(e.target.value);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    
    if (!payment) {
      alert("Please select a payment method.");
      return;
    }
   
    if (payment === "Credit Card") {
      if (!card.cardNumber || !card.expiryDate || !card.cvv || !card.cardName) {
        alert("Please fill in all credit/debit card details.");
        return;
      }
    }
   
    if (payment === "E-Wallet") {
      if (!ewallet.provider || !ewallet.accountNumber) {
        alert("Please fill in all e‑wallet details.");
        return;
      }
    }
   
    if (!delivery) {
      alert("Please select a delivery option.");
      return;
    }
    localStorage.setItem("selectedPaymentMethod", payment);
    navigate("/receipt");
  };

  return (
    <main>
      {}
      <section className="payment-section">
        <Header />
        <h2>Select Payment Method</h2>
        <Sidebar isLoggedIn={true} />
        <form className="payment-box" onChange={handlePaymentChange}>
          <label>
            <input type="radio" name="payment" value="Credit Card" checked={payment === "Credit Card"} onChange={handlePaymentChange} required />
            Credit/Debit Card
          </label>
          <label>
            <input type="radio" name="payment" value="E-Wallet" checked={payment === "E-Wallet"} onChange={handlePaymentChange} />
            E-Wallet
          </label>
          <label>
            <input type="radio" name="payment" value="Cash on Delivery" checked={payment === "Cash on Delivery"} onChange={handlePaymentChange} />
            Cash on Delivery
          </label>
        </form>

        {}
        {payment === "Credit Card" && (
          <section id="cardInfo" className="payment-details">
            <h3>Credit / Debit Card Information</h3>
            <form className="card-form" onChange={handleCardChange}>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                maxLength="16"
                placeholder="1234 5678 9012 3456"
                value={card.cardNumber}
                onChange={handleCardChange}
                required
              />

              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={card.expiryDate}
                onChange={handleCardChange}
                required
              />

              <label htmlFor="cvv">CVV</label>
              <input
                type="password"
                id="cvv"
                name="cvv"
                maxLength="3"
                placeholder="123"
                value={card.cvv}
                onChange={handleCardChange}
                required
              />

              <label htmlFor="cardName">Name on Card</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                placeholder="John Doe"
                value={card.cardName}
                onChange={handleCardChange}
                required
              />
            </form>
          </section>
        )}

        {}
        {payment === "E-Wallet" && (
          <section id="ewalletInfo" className="payment-details">
            <h3>E‑Wallet Information</h3>
            <form className="ewallet-form" onChange={handleEwalletChange}>
              <label htmlFor="ewalletProvider">E‑Wallet Provider</label>
              <select id="ewalletProvider" name="provider" value={ewallet.provider} onChange={handleEwalletChange} required>
                <option value="">-- Select Provider --</option>
                <option value="GCash">GCash</option>
                <option value="PayMaya">Maya</option>
                <option value="GrabPay">GoTyme</option>
              </select>

              <label htmlFor="ewalletNumber">E‑Wallet Account Number</label>
              <input
                type="text"
                id="ewalletNumber"
                name="accountNumber"
                placeholder="09XX XXX XXXX"
                value={ewallet.accountNumber}
                onChange={handleEwalletChange}
                required
              />
            </form>
          </section>
        )}
      </section>

      {}
      <section className="delivery-section">
        <h2>Select Delivery Option</h2>
        <form id="deliveryForm">
          <label>
            <input type="radio" name="delivery" value="Standard" checked={delivery === "Standard"} onChange={handleDeliveryChange} required />
            Standard Delivery (3–5 business days)
          </label>
          <label>
            <input type="radio" name="delivery" value="Same Day" checked={delivery === "Same Day"} onChange={handleDeliveryChange} />
            Same-Day Delivery (available in select areas)
          </label>
        </form>
      </section>

      {}
      <section className="confirm-section">
        <h2>Order Summary</h2>
        <button id="confirmBtn" className="confirm-btn" onClick={handleConfirm}>
          Confirm Order
        </button>
      </section>
      <Footer />
    </main>
  );
};

export default Checkout;
