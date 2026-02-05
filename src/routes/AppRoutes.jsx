import { Routes, Route, HashRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import ScrollToTop from "../components/common/ScrollToTop.jsx";
import Home from "../pages/main/Home.jsx";
import About from "../pages/main/About.jsx";
import Contact from "../pages/main/ContactUs.jsx";
import MlService from "../pages/services/MlService.jsx";
import ServiceLayout from "../layout/ServiceLayout.jsx";
import { mlServiceData } from "../data/service_data.js";

//  NEW LAYOUT AND PAGE
import HealthcareLayout from "../layout/HealthcareLayout.jsx";
import Healthcare from "../pages/industries/HealthCare.jsx";

function AppRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Everything inside MainLayout gets the Global Navbar/Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* HEALTHCARE ROUTE GROUPING */}
          <Route element={<HealthcareLayout />}>
            <Route path="/industries/healthcare" element={<Healthcare />} />
          </Route>

          <Route element={<ServiceLayout serviceData={mlServiceData} />}>
            <Route path="/ml-service" element={<MlService />} />
          </Route>
          
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;