import { useNavigate } from "react-router-dom";
const ProductList = ({ products }) => {
  
  const navigate = useNavigate();
  const navigatetoDetailPage = (id) => () => {
    navigate(`/product/${id}`);
  };
  
  if(!products || products.length ===0) {
    return <div className="p-4 text-center text-gray-500">Không có sản phẩm nào để hiển thị.</div>;
  } 
    return (
        <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-12 col-md-6 col-lg-4 mb-4 text-center"
                style={{ cursor: 'pointer' }}
                onClick={navigatetoDetailPage(product._id.$oid)}
              >
                <img
                  src={product.img1}
                  alt={product.name}
                  className="w-100 mb-2"
                  style={{ height: "240px", objectFit: "contain"}}
                />
                <div className="font-medium" style={{fontWeight:500}}>{product.name}</div>
                <div style={{ color: "#b0b0b0", fontSize: "1rem", fontStyle: "italic" }}>
                  {Number(product.price).toLocaleString()} VND
                </div>
              </div>
            ))}
          </div>
    )
}
export default ProductList;