import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";

import Home from "./pages/Home";
import Login from "./pages/Login";
import OrderPage from "./pages/OrderPage";
import ProductInfo from "./pages/ProductInfo";
import ProductList from "./pages/ProductList";
import MyOrderPage from "./pages/MyOrderPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="*" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products/:productId" element={<ProductInfo />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
        <Route path="/myorder" element={<MyOrderPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
