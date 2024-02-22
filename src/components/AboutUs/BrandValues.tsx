import { Flex, Text } from "@chakra-ui/react";

interface BrandValuesProps {
  title: string;
  description: string;
}

export default function BrandValues({ title, description }: BrandValuesProps) {
  return (
    <Flex mb="5" textAlign="start" flexDir="column">
      <Text fontWeight="bold" fontSize={["lg", "xl"]}>
        {title}
      </Text>
      <Text>{description}</Text>
    </Flex>
  );
}
