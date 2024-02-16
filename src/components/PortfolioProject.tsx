import { Box, Flex, Text, Image, Divider } from "@chakra-ui/react";
import React from "react";

interface PortfolioProjectProps {
  imageSrc: string;
  projectNum: string;
  servicesRendered: string[];
  companyName: string;
}

export default function PortfolioProject({
  imageSrc,
  projectNum,
  servicesRendered,
  companyName,
}: PortfolioProjectProps) {
  return (
    <Flex my="2" flexDir="column">
      <Flex>
        <Box>
          <Image
            cursor="pointer"
            boxSize={{ "2xl": "340px", xl: "300px", base: "130px" }}
            objectFit="cover"
            src={imageSrc}
            alt="Dan Abramov"
          />
          <Divider my="3" />
        </Box>
        <Box>
          <Text
            fontSize={{ base: "xs", xl: "md", "2xl": "lg" }}
            fontWeight={["md", "bold"]}
            transform="rotate(-90deg)"
            my={1}
          >
            {projectNum}
          </Text>
        </Box>
      </Flex>
      <Flex flexDir="row">
        {servicesRendered?.map((service) => (
          <Text fontSize={{ base: "12" }}>{service}</Text>
        ))}
      </Flex>
      <Text fontSize={{ "2xl": 20, xl: 18, base: "14" }} textAlign="start">
        {companyName}
      </Text>
    </Flex>
  );
}
