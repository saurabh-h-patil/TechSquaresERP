import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "aos/dist/aos.css";
import AOS from "aos";

import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>

      <div className="fixed bottom-6 right-4 flex flex-col items-center gap-3 z-50">
        <a
          href="https://wa.me/8208103515"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-md border border-gray-300 p-3 rounded-full hover:scale-110 transition"
        >
          <FaWhatsapp className="text-green-500 text-xl" />
        </a>

        <a
          href="tel:+918208103515"
          className="bg-blue-800 text-white p-3 rounded-full hover:scale-110 transition"
        >
          <FaPhoneAlt className="text-lg" />
        </a>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="bg-blue-800 text-white p-3 rounded-full hover:scale-110 transition"
          >
            <FaArrowUp className="text-lg" />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
