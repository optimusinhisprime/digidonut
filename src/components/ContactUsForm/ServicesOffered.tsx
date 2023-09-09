import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React, { SetStateAction } from "react";
import FormItem from "./ServicesFormItem";
import { ServicesWanted } from "../../pages/ContactUs";

interface ServicesOfferedProps {
  setServicesWanted: React.Dispatch<React.SetStateAction<ServicesWanted>>;
}

export default function ServicesOffered({
  setServicesWanted,
}: ServicesOfferedProps) {
  const servicesOfferedList = [
    "Logo & Branding",
    "Website",
    "Mobile App",
    "Development",
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
      <Text fontWeight="semibold" fontSize={["md", "lg", "2xl", "3xl"]}>
        Choose What You Need
      </Text>
      <Flex mt="5" flexWrap="wrap">
        {servicesOfferedList.map((service) => {
          return (
            <FormItem
              setServicesWanted={setServicesWanted}
              key={service}
              title={service}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
