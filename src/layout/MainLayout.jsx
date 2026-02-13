import React, { useState } from "react";
import Navbar from "../components/common/NavBar";
import Footer from "../components/common/Footer.jsx";
import { Outlet } from "react-router-dom";
import ContactSection from "../components/common/ContactSection.jsx";
import ChatAssistant from "../components/Home/ChatAssistant.jsx";

const MainLayout = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar className=" fixed z-50" />
      <main>
        <ChatAssistant isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
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
