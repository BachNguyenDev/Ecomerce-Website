import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from "../Layout/NavBar";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đặt hàng ở đây
    alert('Order placed!');
  };

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        {/* Banner */}
        <div
          className="banner-shop my-4 p-4"
          style={{
            background: "#f7f8fa",
            borderRadius: "8px",
            minHeight: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: 1, paddingLeft: 40 }}>
            <div
              style={{
                color: "#000",
                fontSize: 40,
                letterSpacing: 2,
                marginBottom: 10,
                textTransform: "uppercase",
                fontStyle: "italic",
              }}
            >
              CHECKOUT
            </div>
          </div>
          <div
            style={{
              color: "#b0b0b0",
              fontSize: 20,
              letterSpacing: 2,
              marginBottom: 10,
              marginRight: 40,
              fontStyle: "italic",
            }}
          >
            HOME / CART / <span style={{ color: "#222" }}>CHECKOUT</span>
          </div>
        </div>
        <div className="row mt-4">
          {/* Billing Details */}
          <div className="col-md-7 mb-4">
            <h4 style={{ letterSpacing: 1, fontWeight: 500, marginBottom: 24 }}>BILLING DETAILS</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: 500 }}>FULL NAME:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Full Name Here!"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: 500 }}>EMAIL:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email Here!"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: 500 }}>PHONE NUMBER:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Phone Number Here!"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label" style={{ fontWeight: 500 }}>ADDRESS:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Address Here!"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark px-4" style={{ fontSize: 18, fontWeight: 400 }}>
                Place order
              </button>
            </form>
          </div>
          {/* Your Order */}
          <div className="col-md-5">
            <div style={{ background: '#fafbfc', borderRadius: 8, padding: 24 }}>
              <h5 style={{ fontWeight: 600, marginBottom: 20, letterSpacing: 1 }}>YOUR ORDER</h5>
              <div style={{ borderBottom: '1px solid #eee', marginBottom: 12 }}>
                {cart.items.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ color: '#222' }}>{item.name} <span style={{ color: '#888' }}>x {item.quantity}</span></span>
                    <span style={{ color: '#888' }}>{Number(item.price).toLocaleString('vi-VN')} VND</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 18 }}>
                <span>TOTAL</span>
                <span>{Number(cart.totalAmount).toLocaleString('vi-VN')} VND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
