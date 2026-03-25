import { Route, Routes } from "react-router-dom";
import Login from "../features/Login/Login";
import Home from "../features/home/pages/Home";
import ProductDetails from "../features/home/pages/ProductDetails";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}