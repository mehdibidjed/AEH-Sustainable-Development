import React from "react";
import { Assets } from "../../assets/Asset";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react";

function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Machine Learning & AI", path: "/services/machine-learning" },
        { name: "Software Development", path: "/services/software-development" },
        { name: "E-Commerce Solutions", path: "/services/e-commerce" },
        { name: "Creative Design", path: "/services/creative-design" },
        { name: "IT Managed Services", path: "/services/it-msprovider" },
      ],
    },
    {
      title: "Industry",
      links: [
        { name: "Healthcare", path: "/industry/healthcare" },
        { name: "Law & Immigration", path: "/industry/law-immigration" },
        { name: "Government", path: "/industry/government" },
        { name: "Satellite", path: "/industry/satellite" },
        { name: "Agriculture", path: "/industry/agriculture" },
      ],
    },
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
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
    <footer className="bg-PrimaryFooterBg text-white pt-16 mt-14">
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
              Ready to elevate your online presence? Contact us today to discuss
              your project and discover how we can bring your vision to life.
            </p>

            <div className="space-y-3 text-sm text-gray-300 font-Inter">
              <a href="tel:+155895548855" className="flex items-center gap-3 hover:text-YellowGreen transition-colors">
                <Phone size={16} className="text-YellowGreen" /> +1 5589 55488 55
              </a>
              <a href="mailto:info@example.com" className="flex items-center gap-3 hover:text-YellowGreen transition-colors">
                <Mail size={16} className="text-YellowGreen" /> info@example.com
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
        © {new Date().getFullYear()} <span className="text-white font-medium">AEH Sustainable Development</span>. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;