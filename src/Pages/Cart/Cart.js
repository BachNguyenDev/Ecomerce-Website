import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CART, DELETE_CART } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {

    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            dispatch(UPDATE_CART({ id, quantity }));
        }
    };

    const handleRemove = (id) => {
        dispatch(DELETE_CART(id));
    };

    return (
        <div className="container mx-auto px-4 mt-2">
            {/* Banner */}
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
                        Cart
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
                    cart
                </div>
            </div>

            {/* Shopping cart title */}
            <div className="my-5">
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 500,
                        fontStyle: "italic",
                        margin: "10px 0 30px 0",
                        color: "#222",
                        letterSpacing: 1,
                        textTransform: "uppercase",
                    }}
                >
                    Shopping cart
                </div>
            </div>

            {/* Main content */}
            <div className="d-flex my-5" style={{ gap: 40 }}>
                {/* Cart Table */}
                <div style={{ flex: 2 }}>
                    <table className="table" style={{ minWidth: 600 }}>
                        <thead>
                            <tr>
                                <th>IMAGE</th>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                                <th>REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.items.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center text-muted">
                                        Your cart is empty.
                                    </td>
                                </tr>
                            ) : (
                                cart.items.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img
                                                src={item.img1}
                                                alt={item.name}
                                                style={{ width: 50, height: 50, objectFit: "contain" }}
                                            />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{Number(item.price).toLocaleString()} VND</td>
                                        <td>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                style={{ border: "none", background: "none", fontSize: 18 }}
                                            >
                                                &#60;
                                            </button>
                                            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                style={{ border: "none", background: "none", fontSize: 18 }}
                                            >
                                                &#62;
                                            </button>
                                        </td>
                                        <td>{Number(item.totalPrice).toLocaleString()} VND</td>
                                        <td>
                                            <button
                                                onClick={() => handleRemove(item.id)}
                                                style={{ border: "none", background: "none", color: "#d11a2a", fontSize: 20 }}
                                                title="Remove"
                                            >
                                                🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                    {/* Navigation buttons */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 30 }}>
                        <button className="btn btn-outline-dark" onClick={() => navigate("/shop")}>&#8592; Continue shopping</button>
                        <button className="btn btn-outline-dark" onClick={() => navigate("/home/cart/checkout")}>Proceed to checkout &#8594;</button>
                    </div>
                </div>

                {/* Cart Total & Coupon */}
                <div style={{ flex: 1 }}>
                    <div
                        style={{
                            border: "1px solid #eee",
                            padding: 20,
                            borderRadius: 8,
                            minWidth: 300,
                            background: "#fafbfc",
                        }}
                    >
                        <h4 style={{ fontWeight: 600, marginBottom: 20 }}>CART TOTAL</h4>
                        <div style={{ marginBottom: 10 }}>
                            <span style={{ color: "#888" }}>SUBTOTAL:</span>
                            <span style={{ float: "right" }}>{Number(cart.totalAmount).toLocaleString()} VND</span>
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <span style={{ color: "#222", fontWeight: 500 }}>TOTAL:</span>
                            <span style={{ float: "right", fontWeight: 600 }}>{Number(cart.totalAmount).toLocaleString()} VND</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your coupon"
                            style={{ width: "100%", margin: "10px 0", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
                        />
                        <button style={{ width: "100%" }} className="btn btn-dark">
                            Apply coupon
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;