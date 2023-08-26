import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
