import { Flex } from "@chakra-ui/layout";
import { Text, useRadioGroup } from "@chakra-ui/react";

export default function CustomerBudget() {
  return (
    <Flex
      direction="column"
      justifyItems="center"
      bgColor="#f9f9f9"
      borderRadius="full"
    >
      <Text fontWeight="semibold" fontSize="3xl">
        Estimate your budget
      </Text>
    </Flex>
  );
}
