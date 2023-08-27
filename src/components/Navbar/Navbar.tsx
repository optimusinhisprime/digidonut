import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactUsModal from "./ContactUsModal";
import { Flex } from "@chakra-ui/layout";
import { Avatar, Image } from "@chakra-ui/react";
import SiteLogo from "../../images/site-logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Flex p="5" mb="10" justifyContent="space-between" alignItems="center">
      <Flex alignItems="center" w="40%" justifyContent="space-evenly">
        <Image
          onClick={() => {
            navigate("/");
          }}
          cursor="pointer"
          boxSize="50px"
          objectFit="cover"
          src={SiteLogo}
          alt="Dan Abramov"
        />
        <Link to="/">Home</Link>
        <Link to="/#why-us">Why Us</Link>
        <Link to="/#services">Service</Link>
        <Link to="/#faq">FAQS</Link>
      </Flex>

      <ContactUsModal />
    </Flex>
  );
}
