// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <nav className="p-4 flex space-x-4 bg-gray-100 shadow">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
