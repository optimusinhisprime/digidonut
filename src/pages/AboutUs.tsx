import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TheTeam from "../components/AboutUs/TheTeam";
import History from "../components/AboutUs/History";
import Values from "../components/AboutUs/Values";

export default function AboutUs() {
  return (
    <Flex bgColor="#F2F4F3" color="#01110A" direction="column">
      <Flex bgColor="#000807" px={{ "2xl": "40" }} flexDirection="column">
        <Navbar />
      </Flex>
      <Flex px={{ "2xl": "40" }} flexDirection="column">
        <TheTeam />
        <History />
        <Values />
      </Flex>

      <Footer />
    </Flex>
  );
}
