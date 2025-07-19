import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_POPUP } from "../redux/popupSlice";
import { useNavigate } from "react-router-dom";

const PopUp = () => {
  const dispatch = useDispatch();
  const { show, product } = useSelector((state) => state.popup);
  const navigate = useNavigate();

  if (!show || !product) return null;

  return (
    <div
      className="popup-overlay"
      onClick={() => dispatch(HIDE_POPUP())}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        zIndex: 1050,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="popup-content container"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 12,
          maxWidth: 800,
          width: "100%",
          padding: 32,
          position: "relative",
        }}
      >
        <button
          className="popup-close"
          onClick={() => dispatch(HIDE_POPUP())}
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            background: "none",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        <div className="row">
          <div
            className="col-12 col-md-6 d-flex justify-content-center align-items-center"
            style={{ minHeight: 260 }}
          >
            <img
              src={product.img1}
              alt={product.name}
              style={{ maxWidth: 180, maxHeight: 320, objectFit: "contain" }}
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h3>{product.name}</h3>
            <p style={{ color: "#b0b0b0" }}>
              {Number(product.price)?.toLocaleString("vi-VN")} VND
            </p>
            <p>{product.short_desc || product.description}</p>
            <button className="btn btn-dark mt-3" style={{ width: "fit-content" }}
              onClick={() => {
                if (product && (product._id?.$oid || product.id)) {
                  navigate(`/product/${product._id?.$oid || product.id}`);
                  dispatch(HIDE_POPUP());
                }
              }}
            >
              <i className="fa fa-shopping-cart"></i> View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
