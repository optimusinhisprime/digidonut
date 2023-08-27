import React from "react";
import { Link } from "react-router-dom";
import ContactUsModal from "./ContactUsModal";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <ContactUsModal />
    </div>
  );
}
