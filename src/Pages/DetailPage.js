import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import {ADD_CART} from "../redux/cartSlice";
import { useDispatch } from "react-redux";
const DetailPage = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await response.json();

        const foundProduct = data.find((p) => {
          const currentProductId = p._id && p._id.$oid ? p._id.$oid : null;
          return currentProductId === productId;
        });
      
        if (foundProduct) {
          setProductDetail({
            ...foundProduct,
            id:
              foundProduct._id && foundProduct._id.$oid
                ? foundProduct._id.$oid
                : null,
          });

          const filteredRelated = data.filter((p) => {
            const currentProductIdInArray = p._id && p._id.$oid ? p._id.$oid : p.id;
            return (
              p.category === foundProduct.category &&
              currentProductIdInArray !== foundProduct._id.$oid
            );
          });
          setRelatedProduct(filteredRelated);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProductDetail();
  }, [productId]);

  if (!productDetail) {
    return (
      <div className="p-4 text-center text-gray-500">
        Không tìm thấy sản phẩm này.
      </div>
    );
  }
  return (
    <div className="container-fluid mt-5">
      <div className="mt-2"> <NavBar/> </div>
      <div className="row justify-content-center">


        {/* Image Product */}
        <div className="col-12 col-md-6 col-lg-5 mb-4 d-flex align-items-center justify-content-center">
          <img
            src={productDetail.img1}
            alt={productDetail.name}
            className="img-fluid rounded shadow-sm"
            style={{
              maxWidth: "400px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-5 mb-4">
          <h1 className="display-4 mb-3">{productDetail.name}</h1>
          <p className="lead text-primary mb-3">
            {Number(productDetail.price).toLocaleString()} VND
          </p>
          <p className="text-muted mb-4">{productDetail.short_desc}</p>

          <div className="d-grid gap-2">
            <button className="btn btn-dark btn-lg" onClick={()=>dispatch(ADD_CART(productDetail))}>Add to Cart</button>
          </div>

          <hr className="my-4" />
          <p className="text-secondary">
            <strong>Category:</strong> {productDetail.category}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="row mt-5 justify-content-center">
        <div className="col-12 col-lg-10">
          <h3 className="mb-3">Description</h3>
          <p className="text-justify">{productDetail.long_desc}</p>
        </div>

        {/* RELATED PRODUCTS */}
      {relatedProduct.length > 0 && (
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-lg-10">
            <h3 className="mb-3">Sản phẩm liên quan</h3>
            <div className="row">
              {relatedProduct.map((p) => ( 
                <div
                  key={p.id}
                  className="col-6 col-md-4 col-lg-3 mb-4 text-center"
                >
                  
                  <Link
                    to={`/product/${p._id && p._id.$oid ? p._id.$oid : p.id}`}
                    className="text-decoration-none text-reset d-block" 
                  >
                    <img
                      src={p.img1}
                      alt={p.name}
                      className="img-fluid rounded mb-2"
                      style={{ height: "180px", objectFit: "contain" }}
                    />
                    <h5 className="font-weight-bold mb-1">{p.name}</h5> 
                    <p className="text-muted mb-0">
                      {Number(p.price).toLocaleString()} VND
                    </p> 
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      </div>

      <div className="row mt-4 justify-content-center">
        <div className="col-12 col-lg-10 text-center">
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline-secondary"
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
