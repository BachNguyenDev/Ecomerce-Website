import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: 1 }}>
              Customer Services
            </h6>
            <ul
              className="list-unstyled"
              style={{ fontStyle: "italic", fontSize: "1rem", opacity: 0.8 }}
            >
              <li>Help & Contact Us</li>
              <li>Returns & Refunds</li>
              <li>Online Stores</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: 1 }}>
              Company
            </h6>
            <ul
              className="list-unstyled"
              style={{ fontStyle: "italic", fontSize: "1rem", opacity: 0.8 }}
            >
              <li>What We Do</li>
              <li>Available Services</li>
              <li>Latest Posts</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: 1 }}>
              Social Media
            </h6>
            <ul
              className="list-unstyled"
              style={{ fontStyle: "italic", fontSize: "1rem", opacity: 0.8 }}
            >
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
