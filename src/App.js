import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Auth/Login";
import Checkout from "./Pages/Cart/Checkout";
import Register from "./Pages/Auth/Register";
import DetailPage from "./Pages/DetailPage";
function App() {
  return (
    <BrowserRouter>
		  <Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/shop" element={<ShopPage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home/cart/checkout" element={<Checkout/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/product/:productId" element={<DetailPage/>}/>
		  </Routes>
		</BrowserRouter>
  );
}

export default App;
