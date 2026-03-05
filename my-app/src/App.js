import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup";
import About from "./components/About";
import Products from "./components/Products";
import Seller from "./components/Seller";

// New specialized Seller routes
import AddProduct from "./components/AddProduct";
import ViewProducts from "./components/ViewProducts";
import EditProduct from "./components/EditProduct";
import Delivery from "./components/Delivery";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
          </>
        }
        />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/about" element={<About />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/delivery" element={<Delivery />} />

        {/* Seller Feature Routes */}
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-products" element={<ViewProducts />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;