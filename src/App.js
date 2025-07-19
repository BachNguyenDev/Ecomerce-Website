import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import Register from "./Pages/Register";
import DetailPage from "./Pages/DetailPage";
function App() {
  return (
    <BrowserRouter>
		  <Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/shop" element={<ShopPage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/product/:productId" element={<DetailPage/>}/>
		  </Routes>
		</BrowserRouter>
  );
}

export default App;
