import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { ON_LOGOUT } from '../redux/authSlice';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, currentUser } = useSelector(state => state.auth);

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToShop = () => {
    navigate("/shop");
  };
  const navigateToCart = () => {
    navigate("/cart");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    dispatch(ON_LOGOUT());
    localStorage.removeItem('currentUser'); // vì localStorage và Redux không liên quan trực tiếp nhau nên cần xóa vì nếu không Redux sẽ khởi tạo lại state từ logic trong authSlice.js
    localStorage.setItem('isLoggedIn', 'false');
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
          <li className="nav-item">
            <button
              type="button"
              className="nav-link btn btn-link p-0"
              style={{ color: "#eab676", fontStyle: "italic", fontWeight: 500, background: "none", border: "none" }}
              onClick={navigateToHome}
            >
              Home
            </button>
          </li>
          <li className="nav-item ms-2">
            <button
              type="button"
              className="nav-link btn btn-link p-0"
              style={{ color: "#444", fontWeight: 500, background: "none", border: "none" }}
              onClick={navigateToShop}
            >
              Shop
            </button>
          </li>
        </ul>
        <span
          className="navbar-brand mx-auto"
          style={{ fontWeight: 500, fontStyle: "italic", letterSpacing: 2 }}
        >
          BOUTIQUE
        </span>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          <li className="nav-item me-3">
            <button
              type="button"
              className="nav-link d-flex align-items-center btn btn-link p-0"
              style={{ background: "none", border: "none" }}
              onClick={navigateToCart}
            >
              <FaShoppingCart
                className="me-1"
                style={{ fontSize: "1rem", opacity: 0.7 }}
              />
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  opacity: 0.7,
                }}
              >
                Cart
              </span>
            </button>
          </li>
          {isLoggedIn && currentUser ? (
            <>
              <li className="nav-item d-flex align-items-center">
                <FaUser className="me-1" style={{ fontSize: "1rem", opacity: 0.7 }} />
                <span style={{ fontStyle: "italic", fontSize: "0.95rem", opacity: 0.7, marginRight: 8 }}>
                  {currentUser.fullName || currentUser.email}
                </span>
                <button
                  type="button"
                  className="btn btn-link p-0 text-danger"
                  style={{ background: "none", border: "none", fontStyle: "italic", fontSize: "0.95rem" }}
                  onClick={handleLogout}
                >
                  (Logout)
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button
                type="button"
                className="nav-link d-flex align-items-center btn btn-link p-0"
                style={{ background: "none", border: "none" }}
                onClick={navigateToLogin}
              >
                <FaUser
                  className="me-1"
                  style={{ fontSize: "1rem", opacity: 0.7 }}
                />
                <span
                  style={{
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    opacity: 0.7,
                  }}
                >
                  Login
                </span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
