import { Routes, Route, HashRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import ScrollToTop from "../components/common/ScrollToTop.jsx";
import Home from "../pages/main/Home.jsx";
import About from "../pages/main/About.jsx";
import Contact from "../pages/main/ContactUs.jsx";
import MlService from "../pages/services/MlService.jsx";
import ServiceLayout from "../layout/ServiceLayout.jsx";
import {
  creativeDesignData,
  EcomerceSolData,
  ItManagedServiceProviderData,
  mlServiceData,
  SoftwareDevData,
} from "../data/service_data.js";
import CreativeDesignService from "../pages/services/CreativeDesignService.jsx";
import SoftwareDev from "../pages/services/SoftwareDev.jsx";
import IndustryLayout from "../layout/IndustryLayout";
import {
  agricultureData,
  govermentData,
  healthCareData,
  intelligenceData,
  satellitesData,
  securityData,
} from "../data/industry_data.js";
import HealthCare from "../pages/industries/HealthCare.jsx";
import Ehealth from "../pages/caseStudies/Ehealth.jsx";
import SmartCars from "../pages/caseStudies/SmartCars.jsx";
import Security from "../pages/caseStudies/Security.jsx";
import SecuritySec from "../pages/industries/Security.jsx";
import Intellignece from "../pages/industries/Intellignece.jsx";

function AppRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route element={<ServiceLayout serviceData={mlServiceData} />}>
            <Route path="/services/machine-learning" element={<MlService />} />
          </Route>
          <Route element={<ServiceLayout serviceData={creativeDesignData} />}>
            <Route
              path="/services/creative-design"
              element={<CreativeDesignService />}
            />
          </Route>
          <Route element={<ServiceLayout serviceData={SoftwareDevData} />}>
            <Route
              path="/services/software-development"
              element={<SoftwareDev />}
            />
          </Route>
          <Route
            path="/services/e-commerce"
            element={<ServiceLayout serviceData={EcomerceSolData} />}
          />
          <Route
            path="/services/it-msprovider"
            element={
              <ServiceLayout serviceData={ItManagedServiceProviderData} />
            }
          />
          <Route element={<IndustryLayout industryData={healthCareData} />}>
            <Route path="/industry/healthcare" element={<HealthCare />} />
          </Route>
          <Route
            path="/industry/agriculture"
            element={<IndustryLayout industryData={agricultureData} />}
          />
          <Route
            path="/industry/satellite"
            element={<IndustryLayout industryData={satellitesData} />}
          />
          <Route element={<IndustryLayout industryData={securityData} />}>
            <Route path="/industry/law-immigration" element={<SecuritySec />} />
          </Route>
          <Route
            path="/industry/government"
            element={<IndustryLayout industryData={govermentData} />}
          />
          <Route element={<IndustryLayout industryData={intelligenceData} />}>
            <Route path="/industry/intelligence" element={<Intellignece />} />
          </Route>
          <Route path="case-study/healthcare" element={<Ehealth />} />
          <Route path="case-study/smartcar" element={<SmartCars />} />
          <Route path="case-study/security" element={<Security />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
