import React, { useState } from "react";
import { Assets } from "../../assets/Asset";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";

function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);

  const industryListData = [
    "Agriculture",
    "Satellite",
    "Law & Immigration",
    "Healthcare",
    "Government",
    "Intelligence",
  ];
  const navItems = [
    { id: "services", label: "Services", path: "" },
    { id: "work", label: "Our work", path: "/#work" }, // Add the # hash here
    { id: "industry", label: "Industry", path: "  " },
    { id: "about", label: "About us", path: "/about" },
  ];

  const servicesData = [
    {
      name: "Machine Learning & AI",
      data: [
        "Machine Learning Models",
        "AI-Powered Applications",
        "Predictive Analytics",
        "Data-Driven Decision Systems",
        "AI Integration in Digital Products",
      ],
      image: Assets.Images.Common.MachineLearningLG,
      path: "/services/machine-learning",
    },
    {
      name: "Software Development",
      data: [
        "Web Application Development",
        "Mobile Application Development",
        "Custom Software Solutions",
        "API Development & Integration",
        "System Architecture & Maintenance",
      ],
      image: Assets.Images.Common.SoftwareDevLG,
      path: "/services/software-development",
    },
    {
      name: "E-Commerce Solutions",
      data: [
        "E-Commerce Website Design",
        "Online Store Development",
        "Payment Gateway Integration",
        "Product & Order Management Systems",
        "Performance & Conversion Optimizations",
      ],
      image: Assets.Images.Common.EcomerceLG,
      path: "/services/e-commerce",
    },
    {
      name: "Crearive Desing",
      data: [
        "UI/UX Design",
        "Web & Mobile App Design",
        "User Research & Wireframing",
        "Prototyping & Design Systems",
        "Visual & Interactive Design",
        "Branding",
      ],
      image: Assets.Images.Common.CreativeDesignLG,
      path: "/services/creative-design",
    },
    {
      name: "It Managed Services Provider",
      data: [
        "24/7 Proactive Monitoring & Support",
        "Cloud Infrastructure Management",
        "Cybersecurity & Threat Protection",
        "Data Backup & Disaster Recovery",
        "Network & IT Strategy Consulting",
      ],
      image: Assets.Images.Common.CreativeDesignLG,
      path: "/services/it-msprovider",
    },
  ];
  const handleNavClick = (path, id) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);

    // If the target is a hash on the current page
    if (path.startsWith("/#")) {
      const targetId = path.replace("/#", "");
      const element = document.getElementById(targetId);

      if (element) {
        // Force smooth scroll even if hash hasn't "changed" in state
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] transition-transform duration-300 px-6 md:px-10 py-4 flex items-center justify-between bg-white shadow-sm">
        {/* Logo */}
        <div className="relative flex gap-3 items-center w-[50%] md:w-[15%] ">
          <img src={Assets.Icons.AppIcon} alt="App Icon" className="h-20 " />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onClick={(e) => {
                // Prevent clicking the "label" from navigating if it's a dropdown
                if (item.id === "services" || item.id === "industry") {
                  e.preventDefault();
                }

                if (item.label === "Our work") {
                  handleNavClick(item.path, item.id);
                }

                if (item.id === "services") {
                  // Toggle logic: if already open, close it.
                  setActiveDropdown(
                    activeDropdown === "services" ? null : "services"
                  );
                  setIndustryDropdownOpen(false);
                } else if (item.id === "industry") {
                  setIndustryDropdownOpen(!industryDropdownOpen);
                  setActiveDropdown(null);
                } else {
                  setActiveDropdown(null);
                  setIndustryDropdownOpen(false);
                }
              }}
            >
              {/* Change: Use 'div' or button for triggers that shouldn't navigate.
         If you must use Link, set to="/#" to stay on page.
      */}
              <div className="py-2 px-3 text-black hover:text-blue-600 transition-colors font-medium flex items-center gap-1 cursor-pointer">
                {item.label}
                {(item.id === "services" || item.id === "industry") && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      (item.id === "services" && activeDropdown) ||
                      (item.id === "industry" && industryDropdownOpen)
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                )}
              </div>

              {/* Industry Dropdown */}
              {item.id === "industry" && industryDropdownOpen && (
                <div className="absolute top-10 left-0 bg-[#080808] text-white rounded-lg py-3 w-52 shadow-2xl z-[70] border border-white/10 animate-fadeIn">
                  {industryListData.map((name) => (
                    <Link
                      key={name}
                      to={`/industry/${name
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/\s+/g, "-")}`}
                      className="block px-6 py-3 hover:bg-blue-600 cursor-pointer text-[15px] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop click from bubbling back to parent div
                        setIndustryDropdownOpen(false);
                      }}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
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
            Connec with us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} />
          ) : (
            <div className=" flex gap-5 items-center">
              <Link
                to="/contact"
                className="bg-YellowGreen text-xs  px-2 py-2  md:text-base text-PrimaryGreen font-bold rounded-full md:px-6 md:py-3 hover:scale-105 transition-transform"
              >
                Connect with us
              </Link>{" "}
              <Menu size={28} />
            </div>
          )}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY (The "Accenture" Style) */}
      <div
        className={`fixed inset-0 bg-[#080808] z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full duration-700"
        } md:hidden overflow-y-auto`}
      >
        <div className="pt-32 px-8 pb-10">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-white/10 pb-4">
                <div
                  className="flex justify-between items-center text-white text-2xl font-semibold py-2"
                  onClick={() => {
                    if (item.id === "services")
                      setMobileServicesOpen(!mobileServicesOpen);
                    if (item.id === "industry")
                      setMobileIndustryOpen(!mobileIndustryOpen);
                  }}
                >
                  {item.id === "services" || item.id === "industry" ? (
                    <span>{item.label}</span>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                  {(item.id === "services" || item.id === "industry") && (
                    <div className="text-blue-400">
                      {(item.id === "services" && mobileServicesOpen) ||
                      (item.id === "industry" && mobileIndustryOpen) ? (
                        <Minus />
                      ) : (
                        <Plus />
                      )}
                    </div>
                  )}
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
                {/* Mobile Sub-menu for Industry */}
                {item.id === "industry" && mobileIndustryOpen && (
                  <div className="mt-4 ml-4 flex flex-col space-y-4 animate-fadeIn">
                    {industryListData.map((name) => (
                      <Link
                        key={name}
                        to={`/industry/${name
                          .toLowerCase()
                          .replace(/ & /g, "-")
                          .replace(/\s+/g, "-")}`}
                        className="text-gray-400 text-lg hover:text-white py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {name}
                      </Link>
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
            <div className="max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-hide sscrollbar-track-transparent hover:scrollbar-thumb-white/40">
            <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-4 gap-8 ">
              {servicesData.map((service) => (
                <div
                  key={service.name}
                  className="space-y-4 border-l border-white/10 pl-6"
                >
                  <Link
                    to={service.path}
                    className="text-lg font-bold text-white hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {service.name}
                  </Link>

                  {/* Added aspect-ratio to keep images consistent during scroll */}
                  <div className="rounded-lg overflow-hidden aspect-video mb-4">
                    <img
                      src={service.image}
                      className="w-full h-full object-cover"
                      alt={service.name}
                    />
                  </div>

                  <ul className="space-y-2">
                    {service.data.map((item) => (
                      <li
                        key={item}
                        className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer flex items-start"
                      >
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
