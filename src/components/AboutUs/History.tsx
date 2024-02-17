import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function History() {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Heading my="5">Our History</Heading>
      <Text my="10" w="50%">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Flex>
  );
}
