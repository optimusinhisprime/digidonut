import { Flex, Heading, Image, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function CompanyValue({ imageSrc, title, description }: any) {
  return (
    <Flex alignItems="center" w={["100%", "30%"]} flexDir="column">
      <Image src={imageSrc} />

      <Heading mb="2" size="md">
        {title}
      </Heading>
      <Text mt="auto" mb="auto">
        {description}
      </Text>
    </Flex>
  );
}
