import { Link } from "react-scroll";
import ContactUsModal from "./ContactUsModal";
import { Flex } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import SiteLogo from "../../images/site-logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Flex
      flexDir={{ base: "column", xl: "row", "2xl": "row" }}
      p="5"
      bgColor="#000807"
      color={"white"}
      justifyContent="space-between"
      alignItems="center"
      px={{ xl: 10, "2xl": 40 }}
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
          fontFamily="ShantyHouse"
          ml="2"
        >
          igiDonut Studio
        </Text>
      </Flex>

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
      <ContactUsModal />
    </Flex>
  );
}
