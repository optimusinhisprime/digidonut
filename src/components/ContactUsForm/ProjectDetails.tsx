import { Flex } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function ProjectDetails() {
  return (
    <Flex
      p="5"
      direction="column"
      justifyContent="center"
      bgColor="#f9f9f9"
      borderRadius="3xl"
    >
      <Text fontWeight="semibold" fontSize={["md", "lg", "2xl", "3xl"]}>
        Tell us more about your project
      </Text>
      <Flex direction="column" p={["3", "10"]}>
        {/* First Name and Last Name */}
        <Flex direction={["column", "row"]} p={["1", "3"]}>
          <FormControl m="2" isRequired w={["100%", "50%"]}>
            <FormLabel fontSize={["xs", "md"]}>First Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl m="2" isRequired w={["100%", "50%"]}>
            <FormLabel fontSize={["xs", "md"]}>Last Name</FormLabel>
            <Input type="text" />
          </FormControl>
        </Flex>
        {/* Company Name and Contact Email */}
        <Flex direction={["column", "row"]} p={["1", "3"]}>
          <FormControl m="2" isRequired w={["100%", "50%"]}>
            <FormLabel fontSize={["xs", "md"]}>Company</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl textAlign="left" m="2" isRequired w={["100%", "50%"]}>
            <FormLabel fontSize={["xs", "md"]}>Email</FormLabel>
            <Input type="email" />
            <FormHelperText fontSize={["xs", "md"]}>
              We'll never share your email.
            </FormHelperText>
          </FormControl>
        </Flex>
        {/* Useful Project Files */}

        {/* Project Description */}
        <Flex p={["1", "3"]}>
          <FormControl m="2">
            <FormLabel fontSize={["xs", "md"]}>Description</FormLabel>
            <Textarea
              fontSize={["xs", "md"]}
              placeholder="Your Project in a Nutshell: Briefly introduce your project. What's its story? What does it aim to achieve?"
            />
          </FormControl>
        </Flex>
        <Button borderRadius="3xl" colorScheme="teal" size="md">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
