import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import ServicesOfferedCheckboxGroup from "./ServiceCardCheckboxGroup";

interface ServicesOfferedProps {
  setServicesWanted: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ServicesOffered({
  setServicesWanted,
}: ServicesOfferedProps) {
  return (
    <Flex
      p="5"
      id="#why-us"
      direction="column"
      justifyItems="center"
      bgColor="#f9f9f9"
      borderRadius="3xl"
    >
      <Text
        textAlign="left"
        fontWeight="semibold"
        fontSize={{ base: "md", sm: "lg", xl: "2xl", "2xl": "3xl" }}
      >
        Choose What You Need:
      </Text>
      <Flex mt="5" flexWrap="wrap">
        <ServicesOfferedCheckboxGroup setServicesWanted={setServicesWanted} />
      </Flex>
    </Flex>
  );
}
