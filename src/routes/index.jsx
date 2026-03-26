import { Route, Routes } from "react-router-dom";
import Login from "../features/Login/Pages/Login";
import Home from "../features/home/pages/Home";
import ProductDetails from "../features/home/pages/ProductDetails";
import Register from "../features/Login/Pages/Register";
import Checkout from "../features/checkout/Pages/Checkout";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={
        <PrivateRoute>
          <Checkout />
        </PrivateRoute>
      } />
    </Routes>
  )
}