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
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { SetStateAction } from "react";
import FileUploadControl from "./FileUploadControl";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface InputProps {
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors?: any;
  type?: string;
  placeholder?: string;
  uploadErrors: any;
}

const FormInput: React.FC<InputProps> = ({
  id,
  label,
  name,
  register,
  errors,
  type = "text",
  placeholder,
  uploadErrors,
}) => {
  return (
    <FormControl textAlign="left" w={["100%", "49%"]} my="2">
      <FormLabel fontSize={["xs", "md"]}>{label}</FormLabel>
      <Input
        id={id}
        {...register(name, uploadErrors[name])}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Text fontSize={["xs", "sm"]} color="red">
            {message}
          </Text>
        )}
      />
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
  errors,
  uploadErrors,
  placeholder,
  rows = 4,
}) => {
  return (
    <FormControl textAlign="left" my="2">
      <FormLabel fontSize={["xs", "md"]}>{label}</FormLabel>
      <Textarea
        id={id}
        {...register(name, uploadErrors[name])}
        fontSize={["xs", "md"]}
        placeholder={placeholder}
        rows={rows}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Text fontSize={["xs", "sm"]} color="red">
            {message}
          </Text>
        )}
      />
    </FormControl>
  );
};

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
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<SetStateAction<File[]>>;
  isSubmitting: boolean;
  setValue: UseFormSetValue<FieldValues>;
}

export default function ProjectDetails({
  register,
  errors,
  selectedFiles,
  setSelectedFiles,
  uploadErrors,
  isSubmitting,
  setValue,
}: ProjectDetailsProps) {
  const onHCaptchaChange = (token: any) => {
    setValue("h-captcha-response", token);
  };

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
            errors={errors}
            uploadErrors={uploadErrors}
          />
          <FormInput
            id="lastName"
            label="Last Name"
            name="lastName"
            register={register}
            uploadErrors={uploadErrors}
            errors={errors}
          />
          <FormInput
            id="companyName"
            label="Company"
            name="companyName"
            register={register}
            uploadErrors={uploadErrors}
            errors={errors}
          />
          <FormInput
            id="companyEmail"
            label="Email"
            name="companyEmail"
            register={register}
            uploadErrors={uploadErrors}
            errors={errors}
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
          uploadErrors={uploadErrors}
          errors={errors}
          placeholder="Your Project in a Nutshell: Briefly introduce your project. What's its story? What does it aim to achieve?"
        />
        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
        />
        <Button
          type="submit"
          borderRadius="3xl"
          colorScheme="teal"
          size="md"
          my="2"
          isLoading={isSubmitting}
          loadingText="Sending details..."
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
