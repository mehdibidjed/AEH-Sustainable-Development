import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import ScrollToTop from "../components/common/ScrollToTop.jsx";
import Home from "../pages/main/Home.jsx";
import About from "../pages/main/About.jsx";
import Contact from "../pages/main/ContactUs.jsx";
import MlService from "../pages/services/MlService.jsx";
import ServiceLayout from "../layout/ServiceLayout.jsx";

function AppRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route element={<ServiceLayout />}>
            <Route path="/ml-service" element={<MlService />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
