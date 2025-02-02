import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import OurProjects from "./pages/OurProjects";
import SiteBlog from "./pages/SiteBlog";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<SiteBlog />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
