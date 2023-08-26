import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact-us">Contact Us</Link>
    </div>
  );
}
