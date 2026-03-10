import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Assets } from "../../assets/Asset";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";

function NavBar() {
  const { t, i18n } = useTranslation();

  const [activeDropdown, setActiveDropdown] = useState(null); // services or industry
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false); // ← fixed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);

  const currentLang = i18n.language.toUpperCase(); // EN, FR, AR

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.toLowerCase());
    setLanguageDropdownOpen(false);     // close desktop language dropdown
    setIsMobileMenuOpen(false);         // close mobile menu
  };

  const industryListData = [
    t("industries.agriculture"),
    t("industries.satellite"),
    t("industries.law_immigration"),
    t("industries.healthcare"),
    t("industries.government"),
    t("industries.intelligence"),
  ];

  const navItems = [
    { id: "services", label: t("navbar.services"), path: "" },
    { id: "work", label: t("navbar.our_work"), path: "/#work" },
    { id: "industry", label: t("navbar.industry"), path: "" },
    { id: "about", label: t("navbar.about_us"), path: "/about" },
  ];

  const servicesData = [
    {
      name: t("service_items.ml_ai.name"),
      data: [
        t("navbar_services.ml_models"),
        t("navbar_services.ai_apps"),
        t("navbar_services.predictive"),
        t("navbar_services.data_decision"),
        t("navbar_services.ai_integration"),
      ],
      image: Assets.Images.Common.MachineLearningLG,
      path: "/services/machine-learning",
    },
    {
      name: t("service_items.software.name"),
      data: [
        t("navbar_services.web_dev"),
        t("navbar_services.mobile_dev"),
        t("navbar_services.custom_software"),
        t("navbar_services.api_dev"),
        t("navbar_services.system_arch"),
      ],
      image: Assets.Images.Common.SoftwareDevLG,
      path: "/services/software-development",
    },
    {
      name: t("service_items.ecommerce.name"),
      data: [
        t("navbar_services.ecom_design"),
        t("navbar_services.online_store"),
        t("navbar_services.payment"),
        t("navbar_services.order_mgmt"),
        t("navbar_services.performance_opt"),
      ],
      image: Assets.Images.Common.EcomerceLG,
      path: "/services/e-commerce",
    },
    {
      name: t("service_items.creative.name"),
      data: [
        t("navbar_services.ui_ux"),
        t("navbar_services.app_design"),
        t("navbar_services.user_research"),
        t("navbar_services.prototyping"),
        t("navbar_services.visual_design"),
        t("navbar_services.branding"),
      ],
      image: Assets.Images.Common.CreativeDesignLG,
      path: "/services/creative-design",
    },
    {
      name: t("service_items.msp.name"),
      data: [
        t("navbar_services.monitoring"),
        t("navbar_services.cloud_mgmt"),
        t("navbar_services.cybersecurity"),
        t("navbar_services.backup"),
        t("navbar_services.it_strategy"),
      ],
      image: Assets.Images.Common.CreativeDesignLG,
      path: "/services/it-msprovider",
    },
  ];

  const handleNavClick = (path, id) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);

    if (path.startsWith("/#")) {
      const targetId = path.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] transition-transform duration-300 px-6 md:px-10 py-4 flex items-center justify-between bg-white shadow-sm">
        {/* Logo */}
        <Link to="/" className="relative flex gap-3 items-center w-[50%] md:w-[15%]">
          <img src={Assets.Icons.AppIcon} alt="App Icon" className="h-20" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onClick={(e) => {
                if (item.id === "services" || item.id === "industry") {
                  e.preventDefault();
                }

                if (item.id === "work") {
                  handleNavClick(item.path, item.id);
                }

                if (item.id === "services") {
                  setActiveDropdown(activeDropdown === "services" ? null : "services");
                } else if (item.id === "industry") {
                  setActiveDropdown(activeDropdown === "industry" ? null : "industry");
                } else {
                  setActiveDropdown(null);
                }
              }}
            >
              {item.id === "about" ? (
                <Link
                  to={item.path}
                  className="py-2 px-3 text-black hover:text-blue-600 transition-colors font-medium flex items-center gap-1 cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <div className="py-2 px-3 text-black hover:text-blue-600 transition-colors font-medium flex items-center gap-1 cursor-pointer">
                  {item.label}
                  {(item.id === "services" || item.id === "industry") && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
              )}

              {/* Desktop Industry Dropdown */}
              {item.id === "industry" && activeDropdown === "industry" && (
                <div className="absolute top-10 left-0 bg-[#080808] text-white rounded-lg py-3 w-52 shadow-2xl z-[70] border border-white/10 animate-fadeIn">
                  {industryListData.map((name, idx) => (
                    <Link
                      key={name}
                      to={`/industry/${[
                        "agriculture",
                        "satellite",
                        "law-immigration",
                        "healthcare",
                        "government",
                        "intelligence",
                      ][idx]}`}
                      className="block px-6 py-3 hover:bg-blue-600 cursor-pointer text-[15px] transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions – Language + Connect */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Selector – FIXED */}
          <div className="relative">
            <button
              className="flex items-center gap-1 font-medium text-black hover:text-blue-600 transition-colors"
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            >
              {currentLang} <ChevronDown className="w-4 h-4" />
            </button>

            {languageDropdownOpen && (
              <div className="absolute top-10 right-0 bg-black text-white rounded-lg py-2 w-32 shadow-xl z-[70] border border-white/10">
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-blue-700 text-sm transition-colors ${
                    currentLang === "EN" ? "bg-blue-900/60" : ""
                  }`}
                  onClick={() => changeLanguage("en")}
                >
                  English
                </button>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-blue-700 text-sm transition-colors ${
                    currentLang === "FR" ? "bg-blue-900/60" : ""
                  }`}
                  onClick={() => changeLanguage("fr")}
                >
                  Français
                </button>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-blue-700 text-sm transition-colors ${
                    currentLang === "AR" ? "bg-blue-900/60" : ""
                  }`}
                  onClick={() => changeLanguage("ar")}
                >
                  العربية
                </button>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="bg-YellowGreen text-PrimaryGreen font-bold rounded-full px-6 py-3 hover:scale-105 transition-transform"
          >
            {t("navbar.connect")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-black">
          {isMobileMenuOpen ? (
            <X size={28} onClick={() => setIsMobileMenuOpen(false)} />
          ) : (
            <div className="flex items-center gap-5">
              <Link
                to="/contact"
                className="bg-YellowGreen text-xs px-3 py-2 md:text-base text-PrimaryGreen font-bold rounded-full md:px-6 md:py-3 hover:scale-105 transition-transform"
              >
                {t("navbar.connect")}
              </Link>
              <Menu size={28} onClick={() => setIsMobileMenuOpen(true)} />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
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
                    if (item.id === "services") setMobileServicesOpen(!mobileServicesOpen);
                    if (item.id === "industry") setMobileIndustryOpen(!mobileIndustryOpen);
                  }}
                >
                  {item.id === "about" ? (
                    <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
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

                {/* Mobile Services */}
                {item.id === "services" && mobileServicesOpen && (
                  <div className="mt-4 ml-4 flex flex-col space-y-6 animate-fadeIn">
                    {servicesData.map((service) => (
                      <div key={service.name} className="space-y-3">
                        <Link
                          to={service.path}
                          className="text-PrimaryBlue font-bold uppercase text-sm tracking-widest"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                        <ul className="space-y-2">
                          {service.data.map((subItem) => (
                            <li
                              key={subItem}
                              className="text-gray-400 text-lg hover:text-white cursor-pointer"
                            >
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mobile Industry */}
                {item.id === "industry" && mobileIndustryOpen && (
                  <div className="mt-4 ml-4 flex flex-col space-y-4 animate-fadeIn">
                    {industryListData.map((name, idx) => (
                      <Link
                        key={name}
                        to={`/industry/${[
                          "agriculture",
                          "satellite",
                          "law-immigration",
                          "healthcare",
                          "government",
                          "intelligence",
                        ][idx]}`}
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

          {/* Mobile Language + Connect */}
          <div className="mt-12 space-y-8">
            <div className="flex flex-wrap gap-5 text-white font-medium">
              <button
                className={`px-4 py-2 rounded ${currentLang === "EN" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`px-4 py-2 rounded ${currentLang === "FR" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
                onClick={() => changeLanguage("fr")}
              >
                FR
              </button>
              <button
                className={`px-4 py-2 rounded ${currentLang === "AR" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
                onClick={() => changeLanguage("ar")}
              >
                AR
              </button>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-[#D9FF7E] text-black font-bold rounded-full py-4 text-xl"
            >
              {t("navbar.connect")}
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Services Dropdown */}
      {activeDropdown === "services" && (
        <div className="hidden md:block fixed top-20 left-0 right-0 w-full bg-[#080808] text-white z-50 border-t border-white/10 shadow-2xl animate-slideDown">
          <div className="max-h-[85vh] overflow-y-auto scrollbar-thin">
            <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-4 gap-8">
              {servicesData.map((service) => (
                <div key={service.name} className="space-y-4 border-l border-white/10 pl-6">
                  <Link
                    to={service.path}
                    onClick={() => setActiveDropdown(null)}
                    className="text-lg font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>

                  <div className="rounded-lg overflow-hidden aspect-video mb-4">
                    <img src={service.image} className="w-full h-full object-cover" alt={service.name} />
                  </div>

                  <ul className="space-y-2">
                    {service.data.map((item) => (
                      <li key={item}>
                        <div className="text-gray-400 text-sm hover:text-white transition-colors flex items-start cursor-default">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </div>
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