import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";

export default function ServicesOffered() {
  return (
    <Flex
      id="#why-us"
      direction="column"
      justifyItems="center"
      bgColor="#f9f9f9"
      borderRadius="full"
    >
      <Text fontWeight="semibold" fontSize="3xl">
        Choose What You Need
      </Text>
    </Flex>
  );
}
