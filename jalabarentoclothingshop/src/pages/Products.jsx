import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Products.css';

const Products = () => {
  
  async function addToCart(item) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((cartItem) => cartItem.name === item.name);
    if (index !== -1) {
      cart[index].qty = (cart[index].qty || 1) + 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart([...cart]);
    alert(`${item.name} added to cart!`);
  }

  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className="products-page-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar isLoggedIn={true} cart={cart} />
        <main className="main-content">
          <h2 className="product-heading">Product List</h2>
          <Navbar />

          {}
          <h3 id="top" className="product-label">Top</h3>
          <section className="products">
            <article className="product">
              <img src="/product1.png" alt="White Shirt" />
              <p>White Shirt</p>
              <p className="price">₱700</p>
              <button className="btn" onClick={() => addToCart({ name: "White Shirt", price: "₱700", image: "/product1.png" })}>
                Add to Cart
              </button>
            </article>

            <article className="product">
              <img src="/product2.png" alt="Black Shirt" />
              <p>Black Shirt</p>
              <p className="price">₱500</p>
              <button className="btn" onClick={() => addToCart({ name: "Black Shirt", price: "₱500", image: "/product2.png" })}>
                Add to Cart
              </button>
            </article>

            <article className="product">
              <img src="/product4.png" alt="Sweat Shirt" />
              <p>Sweat Shirt</p>
              <p className="price">₱650</p>
              <button className="btn" onClick={() => addToCart({ name: "Sweat Shirt", price: "₱650", image: "/product4.png" })}>
                Add to Cart
              </button>
            </article>
          </section>

          {}
          <h3 id="bottom" className="product-label">Bottom</h3>
          <section className="products">
            <article className="product">
              <img src="/product3.png" alt="Sweat Pants" />
              <p>Sweat Pants</p>
              <p className="price">₱400</p>
              <button className="btn" onClick={() => addToCart({ name: "Sweat Pants", price: "₱400", image: "/product3.png" })}>
                Add to Cart
              </button>
            </article>
          </section>

          {}
          <h3 id="cap" className="product-label">Cap</h3>
          <section className="products">
            <article className="product">
              <img src="/product6a.png" alt="Beanie" />
              <p>Beanie</p>
              <p className="price">₱550</p>
              <button className="btn" onClick={() => addToCart({ name: "Beanie", price: "₱550", image: "/product6a.png" })}>
                Add to Cart
              </button>
            </article>

            <article className="product">
              <img src="/product7.png" alt="Black Cap" />
              <p>Black Cap</p>
              <p className="price">₱600</p>
              <button className="btn" onClick={() => addToCart({ name: "Black Cap", price: "₱600", image: "/product7.png" })}>
                Add to Cart
              </button>
            </article>

            <article className="product">
              <img src="/product8.png" alt="White Cap" />
              <p>White Cap</p>
              <p className="price">₱600</p>
              <button className="btn" onClick={() => addToCart({ name: "White Cap", price: "₱600", image: "/product8.png" })}>
                Add to Cart
              </button>
            </article>
          </section>

          {}
          <h3 id="others" className="product-label">Others</h3>
          <section className="products">
            <article className="product">
              <img src="/product5.png" alt="Perfume" />
              <p>Perfume</p>
              <p className="price">₱300</p>
              <button className="btn" onClick={() => addToCart({ name: "Perfume", price: "₱300", image: "/product5.png" })}>
                Add to Cart
              </button>
            </article>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
