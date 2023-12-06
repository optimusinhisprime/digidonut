import { Link } from "react-scroll";
import ContactUsModal from "./ContactUsModal";
import { Flex } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import SiteLogo from "../../images/site-logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Flex
      p="5"
      bgColor={"#01110A"}
      color={"#F2F4F3"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex alignItems="center" cursor="pointer">
        <Image
          boxSize="50px"
          objectFit="cover"
          src={SiteLogo}
          alt="DigiDonut Studio"
        />
        <Text
          onClick={() => {
            navigate("/");
          }}
          fontSize="large"
          fontWeight="bold"
          ml="2"
        >
          DigiDonut Studio
        </Text>
      </Flex>

      <Flex w="40%" justifyContent="space-evenly">
        <Text
          onClick={() => {
            navigate("/");
          }}
          cursor="pointer"
          fontWeight="semibold"
        >
          Home
        </Text>

        <Link to="why-us" smooth={true} duration={500}>
          <Text cursor="pointer">Why Us</Text>
        </Link>
        <Link to="services" smooth={true} duration={500}>
          <Text cursor="pointer">Services</Text>
        </Link>
        <Link to="faq" smooth={true} duration={500}>
          <Text cursor="pointer">FAQs</Text>
        </Link>
      </Flex>
      <ContactUsModal />
    </Flex>
  );
}
