import React from "react";
import { Assets } from "../../assets/Asset";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t("footer.sections.services.title"),
      links: [
        { name: t("footer.sections.services.ml"), path: "/services/machine-learning" },
        { name: t("footer.sections.services.software"), path: "/services/software-development" },
        { name: t("footer.sections.services.ecommerce"), path: "/services/e-commerce" },
        { name: t("footer.sections.services.creative"), path: "/services/creative-design" },
        { name: t("footer.sections.services.msp"), path: "/services/it-msprovider" },
      ],
    },
    {
      title: t("footer.sections.industry.title"),
      links: [
        { name: t("footer.sections.industry.healthcare"), path: "/industry/healthcare" },
        { name: t("footer.sections.industry.law"), path: "/industry/law-immigration" },
        { name: t("footer.sections.industry.government"), path: "/industry/government" },
        { name: t("footer.sections.industry.satellite"), path: "/industry/satellite" },
        { name: t("footer.sections.industry.agriculture"), path: "/industry/agriculture" },
      ],
    },
    {
      title: t("footer.sections.navigation.title"),
      links: [
        { name: t("footer.sections.navigation.home"), path: "/" },
        { name: t("footer.sections.navigation.about"), path: "/about" },
        { name: t("footer.sections.navigation.contact"), path: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, path: "#" },
    { icon: <Twitter size={20} />, path: "#" },
    { icon: <Instagram size={20} />, path: "#" },
    { icon: <Linkedin size={20} />, path: "#" },
  ];

  return (
    <footer className="bg-PrimaryFooterBg text-white pt-16 ">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Section 1: Brand & Contact - Spans 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <img src={Assets.Icons.Icon2} alt="Logo" className="h-16 w-16  object-contain" />
              <div className="font-Poppins">
                <h2 className="text-2xl font-bold leading-tight tracking-tight">A E H</h2>
                <p className="text-[10px] uppercase tracking-[0.2em]  font-semibold">
                  sustainable development
                </p>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>

            <div className="space-y-3 text-sm text-gray-300 font-Inter">
              <a href="tel:+155895548855" className="flex items-center gap-3 hover:text-YellowGreen transition-colors">
                <Phone size={16} className="text-YellowGreen" /> + 213770792729
              </a>
              <a href="mailto:info@example.com" className="flex items-center gap-3 hover:text-YellowGreen transition-colors">
                <Mail size={16} className="text-YellowGreen" /> contact@aehsustainabledevelopment.com
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.path}
                  className="p-2 rounded-full border border-white/10 hover:bg-YellowGreen hover:text-PrimaryGreen transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Dynamic Link Groups */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold font-Inter mb-6 text-white relative w-fit">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-YellowGreen transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 py-6 bg-SecondaryFooterBg/50 border-t border-white/5 text-center text-[11px] text-gray-400 tracking-wider">
        © {currentYear} <span className="text-white font-medium">AEH Sustainable Development</span>. {t("footer.all_rights_reserved")}
      </div>
    </footer>
  );
}

export default Footer;