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
            <Route path="/ml-service" element={<MlService />} />
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
            element={<ServiceLayout serviceData={ItManagedServiceProviderData} />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
