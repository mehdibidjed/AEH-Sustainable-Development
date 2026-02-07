import React from "react";
import Navbar from "../components/common/NavBar";
import Footer from "../components/common/Footer.jsx";
import { Outlet } from "react-router-dom";
import ContactSection from "../components/common/ContactSection.jsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar className=" fixed z-50" />
      <main>
        <Outlet />
        <section className="bg-white   py-10 px-3 md:px-10">
        
        <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
