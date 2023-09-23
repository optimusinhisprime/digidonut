import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactUsModal from "./ContactUsModal";
import { Flex } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import SiteLogo from "../../images/site-logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Flex
      p="5"
      mb={["5", "10"]}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        onClick={() => {
          navigate("/");
        }}
        alignItems="center"
        cursor="pointer"
      >
        <Image
          boxSize="50px"
          objectFit="cover"
          src={SiteLogo}
          alt="Dan Abramov"
        />
        <Text fontSize="large" fontWeight="bold" ml="2">
          DigiDonut Studio
        </Text>
      </Flex>

      <Flex w="40%" justifyContent="space-evenly">
        <Link to="/">
          <Text fontWeight="semibold">Home</Text>
        </Link>
        <Link to="/#why-us">Why Us</Link>
        <Link to="/#services">Service</Link>
        <Link to="/#faq">FAQS</Link>
      </Flex>
      <ContactUsModal />
    </Flex>
  );
}
