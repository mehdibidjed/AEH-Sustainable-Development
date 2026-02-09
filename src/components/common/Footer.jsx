import React from "react";
import { Assets } from "../../assets/Asset";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-PrimaryFooterBg text-white pt-16  mt-7 ">
      <div className="max-w-7xl mx-auto px-10 ">
        {/* Changed from flex to grid for mobile stacking */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-10 lg:gap-4">
          {/* Section Logo & Contact */}
          <div className="space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={Assets.Icons.Icon2}
                alt="Logo"
                className="h-17  w-17"
              />
              <div className="font-Poppins space-y-2">
                <h2 className="text-2xl font-bold leading-tight">A E H</h2>
                <p className="text-[10px] uppercase tracking-widest text-white">
                  sustainable development
                </p>
              </div>
            </div>

            {/* Removed <br/> and used max-w for cleaner wrapping */}
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Ready to elevate your online presence? Contact us today to discuss
              your project and discover how we can bring your vision to life.
            </p>

            <div className="space-y-2 text-sm text-gray-300 font-Inter">
              <p>Phone: +1 5589 55488 55</p>
              <p>Email: info@example.com</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:text-[#D9FF7E] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#D9FF7E] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#D9FF7E] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#D9FF7E] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Colonne Services */}
          <div>
            <h4 className="text-lg font-semibold font-Inter mb-4 md:mb-6 text-white">
              Services
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Email Marketing
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Social Media Marketing
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Search Engine Optimization
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Product Development
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Web Development
              </li>
            </ul>
          </div>

          {/* Colonne Industry */}
          <div>
            <h4 className="text-lg font-semibold font-Inter mb-4 md:mb-6 text-white">
              Industry
            </h4>
            <ul className="space-y-3 md:space-y-4 text-[#CCCCCC] text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Healthcare
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Law & Immigration
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Government
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Satellite
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Agriculture
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Intelligence
              </li> 
            </ul>
          </div>

          {/* Colonne Navigation */}
          <div>
            <h4 className="text-lg font-semibold font-Inter mb-4 md:mb-6 text-white">
              Navigation
            </h4>
            <ul className="space-y-3 md:space-y-4 text-[#CCCCCC] text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Our Work
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Industry
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Careers
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
      </div>
      <div className="mt-16 p-5 bg-SecondaryFooterBg text-center text-xs text-white">
        © Copyright AEH Sustainable Development. All
        Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
