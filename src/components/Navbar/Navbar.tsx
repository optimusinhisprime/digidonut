import { Link } from "react-scroll";
import { useState } from "react"; // Import useState
import ContactUsModal from "./ContactUsModal";
import { Flex, Box } from "@chakra-ui/layout";
import { Image, Text, IconButton, Hide, Show } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"; // Import HamburgerIcon and CloseIcon

import SiteLogo from "../../images/site-logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  return (
    <Flex
      flexDir="row"
      p="5"
      bgColor="#000807"
      color={"white"}
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 10, xl: 10, "2xl": 40 }}
    >
      <Flex alignItems="center" cursor="pointer">
        <Image
          boxSize="50px"
          objectFit="cover"
          src={SiteLogo}
          alt="DigiDonut Studio"
        />
        <Hide below="md">
          <Text
            onClick={() => {
              navigate("/");
            }}
            fontSize="large"
            fontFamily="ShantyHouse"
            ml="2"
          >
            igiDonut Studio
          </Text>
        </Hide>
      </Flex>

      {/* Render hamburger menu button for mobile */}
      <Box display={{ base: "block", xl: "none", "2xl": "none" }}>
        <IconButton
          color="white"
          icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        />
      </Box>

      {/* Render menu items */}
      {isMenuOpen && <Flex>Mobile Menu</Flex>}

      <Show above="md">
        <Flex
          flex={{ base: "column" }}
          w="40%"
          justifyContent={{
            base: "normal",
            xl: "space-evenly",
            "2xl": "space-evenly",
          }}
        >
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
          <Text
            cursor="pointer"
            onClick={() => {
              navigate("/about-us");
            }}
          >
            About Us
          </Text>
        </Flex>
      </Show>

      <Hide below="md">
        <ContactUsModal />
      </Hide>
    </Flex>
  );
}
