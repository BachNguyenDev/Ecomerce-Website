import React, { useState, useEffect } from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SHOW_POPUP } from "../redux/popupSlice";
import PopUp from "../PopUp/PopUp";
import "../Style/Home.css";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!product.length) return;
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % product.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [product]);

  const bannerImg = product.length > 0 ? product[bannerIndex].img1 : "";

  const groupedByCategory = product.reduce((acc, item) => {
    const cat = item.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  const iphoneImg = groupedByCategory["iphone"]?.[0]?.img1 || "";
  const ipadImg = groupedByCategory["ipad"]?.[0]?.img1 || "";
  const watchImg = groupedByCategory["watch"]?.[0]?.img1 || "";
  const airpodImg = groupedByCategory["airpod"]?.[0]?.img1 || "";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToShopPage = () => {
    navigate("/shop");
  };
  return (
    <div className="container mt-2">
      <NavBar />
      {/* Banner */}
      <div
        className="banner-home my-4 p-4"
        style={{
          background: "#f7f8fa",
          borderRadius: "8px",
          minHeight: 350,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",}}>
          
        <div style={{ flex: 1, paddingLeft: 40 }}>
          <div
            style={{
              color: "#b0b0b0",
              fontSize: 14,
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            NEW INSPIRATION 2020
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              fontStyle: "italic",
              marginBottom: 20,
              color: "#222",
            }}
          >
            20% OFF ON NEW
            <br />
            SEASON
          </div>
          <button
              onClick={navigateToShopPage}
              style={{
              background: "#333",
              color: "#fff",
              fontStyle: "italic",
              border: "none",
              padding: "10px 28px",
              borderRadius: 2,
              fontSize: 18,
              marginTop: 10,
            }}
          >
            Browse collections
          </button>
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "center"}}>
          {bannerImg && (
            <img
              src={bannerImg}
              alt="banner"
              style={{ maxWidth: 320, maxHeight: 320, objectFit: "contain" }}
            />
          )}
        </div>
      </div>
      {/* ProductByCategory */}
      <div className="text-center my-5">
        <div style={{ color: "#b0b0b0", fontSize: 16, letterSpacing: 2 }}>
          CAREFULLY CREATED COLLECTIONS
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            fontStyle: "italic",
            margin: "10px 0 30px 0",
            color: "#222",
          }}
        >
          BROWSE OUR CATEGORIES
        </div>
        <div className="row g-4 justify-content-center">
          {/* iPhone */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-light rounded-3 p-4 h-100 d-flex flex-column align-items-center justify-content-center img-hover-bright" onClick={navigateToShopPage}
              style={{ cursor: 'pointer' }}>
              <img
                src={iphoneImg}
                alt="iPhone"
                style={{ maxWidth: 180, marginBottom: 20 }}
              />
              <div style={{ fontWeight: 500, fontSize: 22, marginTop: 10 }}>
                iPhone
              </div>
            </div>
          </div>
          {/* iPad */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-light rounded-3 p-4 h-100 d-flex flex-column align-items-center justify-content-center img-hover-bright" 
            style={{ cursor: 'pointer' }}
            onClick={navigateToShopPage}>
              <img
                src={ipadImg}
                alt="iPad"
                style={{ maxWidth: 180, marginBottom: 20 }}
              />
              <div style={{ fontWeight: 500, fontSize: 22, marginTop: 10 }}>
                 iPad
              </div>
            </div>
          </div>
          {/* Watch */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-light rounded-3 p-4 h-100 d-flex flex-column align-items-center justify-content-center img-hover-bright" 
            style={{ cursor: 'pointer' }}
            onClick={navigateToShopPage}>
              <img
                src={watchImg}
                alt="Watch"
                style={{ maxWidth: 180, marginBottom: 20 }}
              />
              <div style={{ fontWeight: 500, fontSize: 22, marginTop: 10 }}>
                 WATCH
              </div>
            </div>
          </div>
          {/* AirPods */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-light rounded-3 p-4 h-100 d-flex flex-column align-items-center justify-content-center img-hover-bright" 
            style={{ cursor: 'pointer' }}
            onClick={navigateToShopPage}>
              <img
                src={airpodImg}
                alt="AirPods"
                style={{ maxWidth: 180, marginBottom: 20 }}
                
              />
              <div style={{ fontWeight: 500, fontSize: 22, marginTop: 10 }}>
                 AirPods
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ProductTrending */}
      <div className="my-5">
        <div style={{ color: "#b0b0b0", fontSize: 14, letterSpacing: 2 }}>
          MADE THE HARD WAY
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            fontStyle: "italic",
            margin: "10px 0 30px 0",
            color: "#222",
            letterSpacing: 1,
          }}
        >
          TOP TRENDING PRODUCTS
        </div>
        <div className="row g-4 justify-content-center">
          {product.slice(0, 8).map((item) => (
            <div className="col-12 col-md-6 col-lg-3 d-flex" key={item._id}>
              <div
                className="w-100 bg-white rounded-3 p-3 d-flex flex-column align-items-center img-hover-bright"
                style={{
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  minHeight: 320,
                  cursor: 'pointer',
                }}
                onClick={() => dispatch(SHOW_POPUP(item))}
              >
                <img
                  src={item.img1}
                  alt={item.name}
                  style={{
                    maxWidth: 180,
                    maxHeight: 180,
                    objectFit: "contain",
                    marginBottom: 18,
                    transition: "filter 0.3s",
                  }}
                />
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: 16,
                    textAlign: "center",
                    minHeight: 48,
                  }}
                >
                  {item.name}
                </div>
                <div style={{ color: "#b0b0b0", fontSize: 15, marginTop: 8 }}>
                  {item.price && Number(item.price).toLocaleString()} VND
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Service bar */}
      <div
        style={{ background: "#f8f9fa", padding: "36px 0", marginBottom: 0 }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div
                style={{ fontWeight: 500, fontStyle: "italic", fontSize: 20 }}
              >
                FREE SHIPPING
              </div>
              <div
                style={{ color: "#8c939a", fontStyle: "italic", fontSize: 15 }}
              >
                Free shipping worlwide
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div
                style={{ fontWeight: 500, fontStyle: "italic", fontSize: 20 }}
              >
                24 X 7 SERVICE
              </div>
              <div
                style={{ color: "#8c939a", fontStyle: "italic", fontSize: 15 }}
              >
                Free shipping worlwide
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div
                style={{ fontWeight: 500, fontStyle: "italic", fontSize: 20 }}
              >
                FESTIVAL OFFER
              </div>
              <div
                style={{ color: "#8c939a", fontStyle: "italic", fontSize: 15 }}
              >
                Free shipping worlwide
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div
              style={{
                fontWeight: 500,
                fontSize: 22,
                letterSpacing: 1,
                fontStyle: "italic",
              }}
            >
              LET'S BE FRIENDS!
            </div>
            <div
              style={{ color: "#8c939a", fontStyle: "italic", fontSize: 15 }}
            >
              Nisi nisi tempor consequat laboris nisi.
            </div>
          </div>
          <div className="col-12 col-md-6">
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                style={{ borderRadius: 0, fontSize: 16 }}
              />
              <button
                type="submit"
                className="btn btn-dark px-4"
                style={{ borderRadius: 0, fontWeight: 500, fontSize: 16 }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <PopUp />
      <Footer/>
    </div>
  );
};

export default Home;
