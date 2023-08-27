import React from "react";
import { Link } from "react-router-dom";
import ContactUsButton from "./ContactUsButton";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <ContactUsButton />
    </div>
  );
}
