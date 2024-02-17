import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function History() {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Heading my="5" size={["xl", "2xl", "3xl"]}>
        Our Story
      </Heading>
      <Text my={["2", "5", "5"]} w={["90%", "80%", "50%"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Flex>
  );
}
