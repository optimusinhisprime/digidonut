import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { SetStateAction } from "react";
import FileUploadControl from "./FileUploadControl";

interface InputProps {
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: any;
  type?: string;
  placeholder?: string;
}

const FormInput: React.FC<InputProps> = ({
  id,
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
}) => {
  return (
    <FormControl textAlign="left" w={["100%", "49%"]} my="2">
      <FormLabel fontSize={["xs", "md"]}>{label}</FormLabel>
      <Input
        id={id}
        {...register(name)}
        type={type}
        placeholder={placeholder}
      />
      {error && (
        <Text fontSize={["xs", "sm"]} color="red">
          {error}
        </Text>
      )}
    </FormControl>
  );
};

interface TextareaProps extends InputProps {
  rows?: number;
}

export const FormTextarea: React.FC<TextareaProps> = ({
  id,
  label,
  name,
  register,
  error,
  placeholder,
  rows = 4,
}) => {
  return (
    <FormControl textAlign="left" my="2">
      <FormLabel fontSize={["xs", "md"]}>{label}</FormLabel>
      <Textarea
        id={id}
        {...register(name)}
        fontSize={["xs", "md"]}
        placeholder={placeholder}
        rows={rows}
      />
      {error && (
        <Text fontSize={["xs", "sm"]} color="red">
          {error}
        </Text>
      )}
    </FormControl>
  );
};

interface ProjectDetailsProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<SetStateAction<File[]>>;
}

export default function ProjectDetails({
  register,
  errors,
  selectedFiles,
  setSelectedFiles,
}: ProjectDetailsProps) {
  return (
    <Flex
      p="5"
      my="5"
      direction="column"
      justifyContent="center"
      bgColor="#f9f9f9"
      borderRadius="3xl"
    >
      <Text
        textAlign="left"
        fontWeight="semibold"
        fontSize={{ base: "md", sm: "lg", xl: "2xl", "2xl": "3xl" }}
      >
        Tell us more about your project:
      </Text>
      <Flex justifyContent="flex-start" direction="column">
        <Flex justifyContent="space-between" direction="row" flexWrap="wrap">
          <FormInput
            id="firstName"
            label="First Name"
            name="firstName"
            register={register}
            error={errors.firstName && errors.firstName.message}
          />
          <FormInput
            id="lastName"
            label="Last Name"
            name="lastName"
            register={register}
            error={errors.lastName && errors.lastName.message}
          />
          <FormInput
            id="companyName"
            label="Company"
            name="companyName"
            register={register}
            error={errors.companyName && errors.companyName.message}
          />
          <FormInput
            id="companyEmail"
            label="Email"
            name="companyEmail"
            register={register}
            error={errors.companyEmail && errors.companyEmail.message}
            type="email"
          />
        </Flex>
        {/* Useful Project Files */}
        <Flex justifyContent="center">
          <FileUploadControl
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
          />
        </Flex>
        <FormTextarea
          id="projectDescription"
          label="Description"
          name="projectDescription"
          register={register}
          error={errors.projectDescription && errors.projectDescription.message}
          placeholder="Your Project in a Nutshell: Briefly introduce your project. What's its story? What does it aim to achieve?"
        />
        <Button
          type="submit"
          borderRadius="3xl"
          colorScheme="teal"
          size="md"
          my="2"
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
