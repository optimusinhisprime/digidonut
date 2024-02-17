import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar/Navbar";

export default function OurProjects() {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Flex
        h="100vh"
        alignItems="center"
        justifyContent="center"
        bgColor="#000807"
      >
        <Heading color="white" size="xl">
          Coming Soon...
        </Heading>
      </Flex>
    </Flex>
  );
}
