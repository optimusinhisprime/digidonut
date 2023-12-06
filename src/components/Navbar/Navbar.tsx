import { Link } from "react-scroll";
import ContactUsModal from "./ContactUsModal";
import { Flex } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import SiteLogo from "../../images/site-logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      p="5"
      bgColor={"#01110A"}
      color={"#F2F4F3"}
      justifyContent="space-between"
      alignItems="center"
      position={isSticky ? "fixed" : "relative"}
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      transition="background-color 0.3s, color 0.3s"
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
        <Link to="hero" smooth={true} duration={500}>
          <Text cursor="pointer" fontWeight="semibold">
            Home
          </Text>
        </Link>
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
