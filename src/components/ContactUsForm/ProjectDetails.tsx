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
import FileUploadControl from "./FileUploadControl";
import {
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  FieldErrors,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface ProjectDetailsProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  uploadErrors: {
    firstName: RegisterOptions<FieldValues, "firstName"> | undefined;
    lastName: RegisterOptions<FieldValues, "lastName"> | undefined;
    companyName: RegisterOptions<FieldValues, "companyName"> | undefined;
    companyEmail: RegisterOptions<FieldValues, "companyEmail"> | undefined;
    projectDescription:
      | RegisterOptions<FieldValues, "projectDescription">
      | undefined;
  };
}

export default function ProjectDetails({
  register,
  errors,
  uploadErrors,
}: ProjectDetailsProps) {
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
          <FormControl textAlign="left" m="2" w={["100%", "50%"]}>
            <FormLabel fontSize={["xs", "md"]}>First Name</FormLabel>
            <Input
              id="firstName"
              {...register("firstName", uploadErrors.firstName)}
              type="text"
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ message }) => <Text color="red">{message}</Text>}
            />
          </FormControl>
          <FormControl textAlign="left" m="2" w={["100%", "50%"]}>
            <FormLabel fontSize={["xs", "md"]}>Last Name</FormLabel>
            <Input
              id="lastName"
              {...register("lastName", uploadErrors.lastName)}
              type="text"
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ message }) => <Text color="red">{message}</Text>}
            />
          </FormControl>
        </Flex>
        {/* Company Name and Contact Email */}
        <Flex direction={["column", "row"]} p={["1", "3"]}>
          <FormControl textAlign="left" m="2" w={["100%", "50%"]}>
            <FormLabel fontSize={["xs", "md"]}>Company</FormLabel>
            <Input
              id="companyName"
              {...register("companyName", uploadErrors.companyName)}
              type="text"
            />
            <ErrorMessage
              errors={errors}
              name="companyName"
              render={({ message }) => <Text color="red">{message}</Text>}
            />
          </FormControl>
          <FormControl textAlign="left" m="2" w={["100%", "50%"]}>
            <FormLabel fontSize={["xs", "md"]}>Email</FormLabel>
            <Input
              id="companyEmail"
              {...register("companyEmail", uploadErrors.companyEmail)}
              type="email"
            />
            <ErrorMessage
              errors={errors}
              name="companyEmail"
              render={({ message }) => <Text color="red">{message}</Text>}
            />
          </FormControl>
        </Flex>
        {/* Useful Project Files */}
        <Flex justifyContent="center" p={["1", "3"]}>
          <FileUploadControl register={register} />
        </Flex>

        {/* Project Description */}
        <Flex p={["1", "3"]}>
          <FormControl textAlign="left" m="2">
            <FormLabel fontSize={["xs", "md"]}>Description</FormLabel>
            <Textarea
              id="projectDescription"
              {...register(
                "projectDescription",
                uploadErrors.projectDescription
              )}
              fontSize={["xs", "md"]}
              placeholder="Your Project in a Nutshell: Briefly introduce your project. What's its story? What does it aim to achieve?"
            />
            <ErrorMessage
              errors={errors}
              name="projectDescription"
              render={({ message }) => <Text color="red">{message}</Text>}
            />
          </FormControl>
        </Flex>
        <Button type="submit" borderRadius="3xl" colorScheme="teal" size="md">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
