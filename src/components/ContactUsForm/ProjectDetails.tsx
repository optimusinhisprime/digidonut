import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

export default function ProjectDetails() {
  return (
    <Flex
      direction="column"
      justifyItems="center"
      bgColor="#f9f9f9"
      borderRadius="full"
    >
      <Text fontWeight="semibold" fontSize="3xl">
        Tell us more about your project
      </Text>
    </Flex>
  );
}
