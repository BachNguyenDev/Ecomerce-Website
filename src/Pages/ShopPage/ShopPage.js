import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./SideBar";
import NavBar from "../../Layout/NavBar";
import Footer from "../../Layout/Footer";
import ProductList from "./ProductList";
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await response.json();
        setProducts(data);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);


  const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);
  
  return (
    <div className="container mx-auto px-4 mt-2">
    <NavBar/>
      <div
        className="banner-shop my-4 p-4"
        style={{
          background: "#f7f8fa",
          borderRadius: "8px",
          minHeight: 350,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {" "}
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
            {" "}
            shop{" "}
          </div>
        </div>
        <div
          style={{
            color: "#b0b0b0",
            fontSize: 30,
            letterSpacing: 2,
            marginBottom: 10,
            marginRight: 40,
            fontStyle: "italic",
          }}
        >
          {" "}
          shop{" "}
        </div>
      </div>
      <div className="d-flex items-start gap-6">
        <div className="w-32">
          <Sidebar onSelectCategory={setSelectedCategory} />
        </div>
        <div className="flex-1 container-fluid ">
        <ProductList products={filteredProducts} />
         </div>
      </div>
      <Footer />
    </div>
  );
};
export default ShopPage;