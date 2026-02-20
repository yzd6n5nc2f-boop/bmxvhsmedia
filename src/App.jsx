import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Work from "./pages/Work.jsx";
import WorkDetail from "./pages/WorkDetail.jsx";
import Pricing from "./pages/Pricing.jsx";
import StudioWorkbench from "./pages/StudioWorkbench.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`app-shell${isHome ? " home-shell" : ""}`}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/studio" element={<StudioWorkbench />} />
          <Route path="/studio/workbench" element={<StudioWorkbench />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
      <div className="brand-fixed">
        <span className="brand-fixed-left">BMX Media ©</span>
        <span className="brand-fixed-right">InnoWeb Ventures LTD</span>
      </div>
    </div>
  );
}
