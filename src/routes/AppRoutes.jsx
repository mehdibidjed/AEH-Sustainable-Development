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
import IndustryLayout from '../layout/IndustryLayout';
import { agricultureData, healthCareData, intelligenceData, satellitesData, securityData } from "../data/industry_data.js";
import HealthCare from "../pages/industries/HealthCare.jsx";
import Ehealth from "../pages/caseStudies/Ehealth.jsx";
import SmartCars from "../pages/caseStudies/SmartCars.jsx";
import Security from "../pages/caseStudies/Security.jsx";

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
              path="/creative-design-service"
              element={<CreativeDesignService />}
            />
          </Route>
          <Route element={<ServiceLayout serviceData={SoftwareDevData} />}>
            <Route path="softdev-service" element={<SoftwareDev />} />
          </Route>
          <Route
            path="ecomerce-service"
            element={<ServiceLayout serviceData={EcomerceSolData} />}
          />
          <Route
            path="it-msp-service"
            element={
              <ServiceLayout serviceData={ItManagedServiceProviderData} />
            }
          />
        <Route   element={<IndustryLayout industryData={healthCareData}/>}>
        <Route path="health-industry" element={<HealthCare />} />
        </Route>
        <Route path="agriculture-industry" element ={<IndustryLayout industryData={agricultureData}/>}/>
        <Route path="satellite-industry" element ={<IndustryLayout industryData={satellitesData}/>}/>
        <Route path="security-industry" element ={<IndustryLayout industryData={securityData}/>}/>
        <Route path="intelligence-industry" element ={<IndustryLayout industryData={intelligenceData}/>}/>
        <Route path="health-case-study" element={<Ehealth/>}/>
        <Route path="smart-car-study" element={<SmartCars/>}/>
        <Route path="security-study" element={<Security/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
