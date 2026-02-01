import React, { useState } from "react";
import { Assets } from "../../assets/Asset";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(null);

  const navItems = [
    { id: "services", label: "Services" },
    { id: "work", label: "Our work" },
    { id: "industry", label: "Industry" },
    { id: "blog", label: "Blog" },
    { id: "about", label: "About us" },
  ];

  // Services data from the second image
  const services = [
    "Machine Learning & AI",
    "Software Development",
    "E-Commerce Solutions",
    "Creative Design",
  ];
  const servicesData = {
    "Machine Learning & AI": [
      "Machine Learning Models",
      "AI-Powered Applications",
      "Predictive Analytics",
      "Data-Driven Decision Systems",
      "AI Integration in Digital Products",
    ],
    "Software Development": [
      "Web Application Development",
      "Mobile Application Development",
      "Custom Software Solutions",
      "API Development & Integration",
      "System Architecture & Maintenance",
    ],
    "E-Commerce Solutions": [
      "E-Commerce Website Design",
      "Online Store Development",
      "Payment Gateway Integration",
      "Product & Order Management Systems",
      "Performance & Conversion Optimizations",
    ],
    "Creative Design": [
      "UI/UX Design",
      "Web & Mobile App Design",
      "User Research & Wireframing",
      "Prototyping & Design Systems",
      "Visual & Interactive Design",
      "Branding",
    ],
  };

  const handleMouseEnter = (itemId) => {
    if (itemId === "services") {
      setActiveDropdown("services");
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 md:px-10 md:py-5 flex items-center justify-between bg-white shadow-sm">
        {/* Logo part */}
        <div className="relative flex gap-3 items-center">
          <img
            src={Assets.Icons.AppIcon}
            alt="App Icon"
            className="h-10 w-10"
          />
          <div className="font-Poppins text-PrimaryBlue">
            <h1 className="text-xl">A E H</h1>
            <p className="text-xs">sustainable development</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`py-2 px-3 text-black hover:text-PrimaryBlue transition-colors font-medium flex items-center gap-1 ${
                  activeDropdown === "services" && item.id === "services"
                    ? "text-PrimaryBlue"
                    : ""
                }`}
              >
                {item.label}
                {item.id === "services" && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
            </div>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex items-center gap-2">
          <button
            className="flex items-center gap-4 relative"
            onClick={() => setLanguageDropdownOpen((prev) => !prev)}
          >
            <div className="flex items-center space-x-2">
              English
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
            {languageDropdownOpen && (
              <div className="absolute top-8 right-0 bg-[#080808] text-white rounded-md z-10">
                <ul className="flex flex-col gap-2 px-2 py-1">
                  <li
                    className="hover:text-white hover:bg-primary_blue px-4 py-2 rounded-md cursor-pointer"
                    onClick={() => {
                      setLanguageDropdownOpen((prev) => !prev);
                    }}
                  >
                    French
                  </li>
                  <li
                    className="hover:text-white hover:bg-primary_blue px-4 py-2 rounded-md cursor-pointer"
                    onClick={() => {
                      setLanguageDropdownOpen((prev) => !prev);
                    }}
                  >
                    English
                  </li>
                  <li
                    className="hover:text-white hover:bg-primary_blue px-4 py-2 rounded-md cursor-pointer"
                    onClick={() => {
                      setLanguageDropdownOpen((prev) => !prev);
                    }}
                  >
                    Arabic
                  </li>
                </ul>
              </div>
            )}
          </button>
          <Link
            to="/contact"
            className="bg-YellowGreen text-PrimaryGreen rounded-full px-6 py-4 hover:bg-opacity-80"
          >
            Contact with us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700 p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Full-width Services Dropdown - Fixed outside of main nav */}
      {activeDropdown === "services" && (
        <div
          className="fixed top-16 left-0 right-0 w-full h-screen bg-[#080808] text-white shadow-xl border-t border-gray-200 z-50"
          onMouseEnter={() => setActiveDropdown("services")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto scrollbar-hide">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="space-y-4 border-l border-[#fff9f9] pl-4 py-0"
                >
                  <Link
                    to={`/services/${service
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/\s+/g, "-")}`}
                    className="text-lg font-semibold text-white hover:text-blue-400 transition-colors block mb-4"
                  >
                    {service}
                  </Link>
                  {/* Correction importante : utiliser le bon service pour les données */}
                  <ul className="list-disc pl-4 space-y-2">
                    {servicesData[service]?.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <span className="text-gray-300 text-sm">{item}</span>
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
