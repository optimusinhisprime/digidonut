import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React, { SetStateAction } from "react";
import FormItem from "./ServicesFormItem";
import { ServicesWanted } from "../../pages/ContactUs";
import ServicesOfferedCheckboxGroup from "./ServiceCardCheckboxGroup";

interface ServicesOfferedProps {
  setServicesWanted: React.Dispatch<React.SetStateAction<ServicesWanted>>;
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
      <Text fontWeight="semibold" fontSize={["md", "lg", "2xl", "3xl"]}>
        Choose What You Need
      </Text>
      <Flex mt="5" flexWrap="wrap">
        <ServicesOfferedCheckboxGroup />
      </Flex>
    </Flex>
  );
}
