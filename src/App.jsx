
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {isHome && <Footer />}
    </>
  );
}

export default App;
