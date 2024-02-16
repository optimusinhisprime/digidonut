import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TheTeam from "../components/AboutUs/TheTeam";
import History from "../components/AboutUs/History";
import Reviews from "../components/AboutUs/Reviews";

export default function AboutUs() {
  return (
    <Flex color="#01110A" direction="column">
      <Navbar />
      <History />
      <TheTeam />
      <Reviews />
      <Footer />
    </Flex>
  );
}
