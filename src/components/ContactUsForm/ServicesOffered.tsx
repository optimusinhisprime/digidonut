import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import FormItem from "./FormItem";

export default function ServicesOffered() {
  const servicesOfferedList = [
    "Logo & Branding",
    "Website",
    "Mobile App",
    "Development",
    "Research",
    "Engineering",
    "Data Analytics",
    "Consultancy",
  ];
  return (
    <Flex
      p="5"
      id="#why-us"
      direction="column"
      justifyItems="center"
      bgColor="#f9f9f9"
      borderRadius="3xl"
    >
      <Text fontWeight="semibold" fontSize="3xl">
        Choose What You Need
      </Text>
      <Flex mt="5" flexWrap="wrap">
        {servicesOfferedList.map((service) => {
          return <FormItem key={service} title={service} />;
        })}
      </Flex>
    </Flex>
  );
}
