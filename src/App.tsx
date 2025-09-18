// src/App.tsx


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Items from "./pages/Items";
import Cart from "./pages/Cart";
import Navigation from "./components/sections/Navigation";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navigation />
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Features />
                  </>
                }
              />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/items" element={<Items />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
