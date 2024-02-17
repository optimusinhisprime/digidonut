import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface ServiceProps {
  serviceTitle: string;
  serviceDescription: string;
}

export default function Service({
  serviceDescription,
  serviceTitle,
}: ServiceProps) {
  return (
    <Box mb="5" w={{ base: "100%" }} textAlign="start">
      <Text fontSize={["15", "20", "25"]} fontWeight="bold">
        {serviceTitle}
      </Text>
      <Text>{serviceDescription}</Text>
    </Box>
  );
}
