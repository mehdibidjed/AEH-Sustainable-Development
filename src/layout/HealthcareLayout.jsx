import React from 'react';
import { Outlet } from "react-router-dom";
import Contact from "../components/common/ContactSection";
import HealthcareHero from "../components/healthcare/HealthcareHero";
import HealthcareServiceCard from "../components/healthcare/HealthcareServiceCard";
import HealthcareSolutions from "../components/healthcare/HealthcareSolutions";
import HealthcareTechStack from "../components/healthcare/HealthcareTechStack";
import HealthcareDiscover from "../components/healthcare/HealthcareDiscover";
import ConnectWithExpert from "../components/healthcare/ConnectWithExpert";

const HealthcareLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* 1. Specialized Healthcare Hero (Top of every healthcare page) */}
      <HealthcareHero />

      {/* 2. Healthcare Services Section */}
      <HealthcareServiceCard />

      {/* 3. Healthcare Solutions (Case Studies) */}
      <HealthcareSolutions />

      {/* 4. Tech Stack Bar (Favorite Tools) */}
      <HealthcareTechStack />

      {/* 5. Discover More Industries */}
      <HealthcareDiscover />

      {/* 6. The Outlet: This is where the specific page content (from HealthCare.jsx) will appear */}


      {/* 6. Connect With Expert (Call to Action) */}
      <ConnectWithExpert />

      {/* 7. Contact Section (Bottom of every healthcare page) */}
      <div className="max-w-7xl mx-auto w-full mb-12 px-6">
        <Contact />
      </div>
    </div>
  );
};

export default HealthcareLayout;