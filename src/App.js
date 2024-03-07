import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';
const App = () => {
  const [cart, setCart] = useState(5);
  return (
    <div className="container">
      <Toaster/>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
