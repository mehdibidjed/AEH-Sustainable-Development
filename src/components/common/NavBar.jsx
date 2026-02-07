import React, { useState } from "react";
import { Assets } from "../../assets/Asset";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";

function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navItems = [
    { id: "services", label: "Services" },
    { id: "work", label: "Our work" },
    { id: "industry", label: "Industry" },
    { id: "blog", label: "Blog" },
    { id: "about", label: "About us" },
  ];

  const servicesData = [
 {    name: "Machine Learning & AI",
      data: [
        "Machine Learning Models",
        "AI-Powered Applications",
        "Predictive Analytics",
        "Data-Driven Decision Systems",
        "AI Integration in Digital Products",
      ],
      image:Assets.Images.Common.MachineLearningLG
    },
    {
      name:"Software Development",
      data: [
        "Web Application Development",
        "Mobile Application Development",
        "Custom Software Solutions",
        "API Development & Integration",
        "System Architecture & Maintenance",
      ],
      image:Assets.Images.Common.SoftwareDevLG
    },
    {
      name:"E-Commerce Solutions",
      data: [
        "E-Commerce Website Design",
        "Online Store Development",
        "Payment Gateway Integration",
        "Product & Order Management Systems",
        "Performance & Conversion Optimizations",
      ],
      image:Assets.Images.Common.EcomerceLG
    },
    {
      name:"Crearive Desing",
      data: [
        "UI/UX Design",
        "Web & Mobile App Design",
        "User Research & Wireframing",
        "Prototyping & Design Systems",
        "Visual & Interactive Design",
        "Branding",
      ],
      image:Assets.Images.Common.CreativeDesignLG
    }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] transition-transform duration-300 px-6 md:px-10 py-4 md:py-5 flex items-center justify-between bg-white shadow-sm">
        {/* Logo */}
        <div className="relative flex gap-3 items-center">
          <img
            src={Assets.Icons.AppIcon}
            alt="App Icon"
            className="h-12 w-12"
          />
          <div className="font-Poppins text-PrimaryBlue">
            <h1 className="text-xl font-regular font-Popine leading-7 tracking-tight">A E H</h1>
            <p className="text-[10px]  tracking-tighter">
              sustainable development
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onClick={() => {
                if (item.id == "services" && activeDropdown == null) {
                  setActiveDropdown(item.id);
                } else {
                  setActiveDropdown(null);
                }
              }}
            >
              <button
                className={`py-2 px-3 text-black hover:text-blue-600 transition-colors font-medium flex items-center gap-1`}
              >
                {item.label}
                {item.id === "services" && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            className="relative flex items-center gap-1 font-medium"
            onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
          >
            English <ChevronDown className="w-4 h-4" />
            {languageDropdownOpen && (
              <div className="absolute top-10 right-0 bg-black text-white rounded-lg py-2 w-32 shadow-xl">
                {["French", "English", "Arabic"].map((lang) => (
                  <div
                    key={lang}
                    className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </button>
          <Link
            to="/contact"
            className="bg-YellowGreen text-PrimaryGreen font-bold rounded-full px-6 py-3 hover:scale-105 transition-transform"
          >
            Connect with us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY (The "Accenture" Style) */}
      <div
        className={`fixed inset-0 bg-[#080808] z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full duration-500"
        } md:hidden overflow-y-auto`}
      >
        <div className="pt-24 px-8 pb-10">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-white/10 pb-4">
                <div
                  className="flex justify-between items-center text-white text-2xl font-semibold py-2"
                  onClick={() =>
                    item.id === "services" &&
                    setMobileServicesOpen(!mobileServicesOpen)
                  }
                >
                  <Link
                    to={`/${item.id}`}
                    onClick={() =>
                      item.id !== "services" && setIsMobileMenuOpen(false)
                    }
                  >
                    {item.label}
                  </Link>
                  {item.id === "services" &&
                    (mobileServicesOpen ? (
                      <Minus className="text-blue-400" />
                    ) : (
                      <Plus />
                    ))}
                </div>

                {/* Mobile Sub-menu for Services */}
                {item.id === "services" && mobileServicesOpen && (
                  <div className="mt-4 ml-4 flex flex-col space-y-6 animate-fadeIn">
                    {servicesData.map((service) => (
                      <div key={service.name} className="space-y-3">
                        <h4 className="text-PrimaryBlue  font-bold uppercase text-sm tracking-widest">
                          {service.name}
                        </h4>
                        <ul className="space-y-2">
                          {service.data.map((subItem) => (
                            <li
                              key={subItem}
                              className="text-gray-400 text-lg hover:text-white"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Footer Actions */}
          <div className="mt-12 space-y-6">
            <div className="flex gap-4 text-white font-medium">
              <span className="text-blue-400">EN</span>
              <span className="opacity-50">FR</span>
              <span className="opacity-50">AR</span>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-[#D9FF7E] text-black font-bold rounded-full py-4 text-xl"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Services Dropdown Overlay */}
      {activeDropdown === "services" && (
        <div className="hidden md:block fixed top-20 left-0 right-0 w-full bg-[#080808] text-white z-50 border-t border-white/10 shadow-2xl animate-slideDown">
          <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-4 gap-8">
            {servicesData.map((service) => (
              <div
                key={service}
                className="space-y-4 border-l border-white/10 pl-6"
              >
                <h3 className="text-lg font-bold text-white hover:text-blue-400 cursor-pointer">
                  {service.name}
                </h3>
                <img src={service.image} className="rounded-lg mb-8"/>
                <ul className="space-y-2">
                  {service.data.map((item) => (
                    <li
                      key={item}
                      className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
